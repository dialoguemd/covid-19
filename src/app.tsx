import React from 'react'

import styled, { ThemeProvider } from 'styled-components/macro'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import InfoPage from './pages/info'
import WelcomePage from './pages/welcome'
import Chatbot from './components/chatbot'
import { theme } from './theme'
import GlobalStyles from './styles'
import config from 'services/config'

import { BridgeWrapper } from './bridge/wrapper'
import { bridgeThemeMapper } from './theme'

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export function AppInner(props) {
  return (
    <AppContainer>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" {...props}>
            <WelcomePage />
          </Route>
          <Route path="/info/">
            <InfoPage {...props} />
          </Route>
          <Route path="/chat/">
            <Chatbot {...props} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  )
}

export function App(props) {
  if (config.EMBEDDED) {
    return (
      <BridgeWrapper themeMapper={bridgeThemeMapper}>
        <AppInner {...props} />
      </BridgeWrapper>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <AppInner {...props} />
    </ThemeProvider>
  )
}

export default App
