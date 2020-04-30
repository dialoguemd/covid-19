import React from 'react'
import { Location } from 'history'

import styled from 'styled-components/macro'
import { pathToRegexp, compile } from 'path-to-regexp'
import { useTranslation } from 'react-i18next'
import { useLocation, useHistory } from 'react-router-dom'

const LanguagePickerButton = styled.button`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.buttonText};
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px;
  margin: 0 16px;
  min-width: 50px;
  min-height: 40px;
  transition: background 200ms linear;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`

const generateLanguage = (locale: string, location: Location) => {
  const ROUTE = '/:locale/:path*'
  const definePath = compile(ROUTE)
  const routeComponents = pathToRegexp(ROUTE).exec(location.pathname)

  let subPaths = null
  if (routeComponents && routeComponents[2]) {
    subPaths = routeComponents[2].split('/')
  }

  let languagePath = definePath({
    locale,
    path: subPaths
  })

  if (location.search) languagePath = `${languagePath}${location.search}`

  return languagePath
}

const LanguagePicker: React.FC = props => {
  const { i18n } = useTranslation()
  const location = useLocation()
  const history = useHistory()

  const nextLanguage = i18n.languages[1]

  if (i18n.languages.length === 1) {
    return null
  }

  const onCLick = () => {
    history.push(generateLanguage(nextLanguage, location))
  }

  return (
    <LanguagePickerButton {...props} onClick={onCLick}>
      {nextLanguage}
    </LanguagePickerButton>
  )
}

export default LanguagePicker
