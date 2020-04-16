import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  initConsoleHiJack,
  initEventListener,
  postEventToHost,
  postWrapFunctions
} from './service'
import i18n, { DEFAULT_LANGUAGE } from 'services/i18n'
import { BridgeProvider } from './context'

// Routes console events from the HTML side to the host.
initConsoleHiJack()

export const BridgeWrapper: React.FC<{
  children?: any
  themeMapper: Function
}> = ({ children, themeMapper }) => {
  const [props, setProps] = useState<any>({})
  const [theme, setTheme] = useState<any>(null)
  const [functions, setFunctions] = useState<any>({})
  const [environment, setEnvironment] = useState<any>({})

  useEffect(() => {
    initEventListener((data: any = {}) => {
      if (data.type === 'update') {
        setProps(data.props || {})
      }
      if (data.type === 'config') {
        setProps(data.props || {})
        setTheme(themeMapper(data.theme || {}))
        setFunctions(postWrapFunctions(data.functions || {}))
        setEnvironment(data.environment || {})
        const { locale } = data.environment || {}
        i18n.changeLanguage(locale || DEFAULT_LANGUAGE)
      }
    })
    postEventToHost({ type: 'ready' })
  }, [themeMapper])

  if (!theme) return null
  return (
    <React.Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <BridgeProvider value={{ environment, props, functions }}>
          {React.cloneElement(children, { ...props, ...functions })}
        </BridgeProvider>
      </ThemeProvider>
    </React.Suspense>
  )
}
