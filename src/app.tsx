import React from 'react'

import styled, { ThemeProvider } from 'styled-components/macro'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import InfoPage from './pages/info'
import WelcomePage from './pages/welcome'
import Chatbot from './components/chatbot'
import { theme } from './theme'

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route path="/info/">
              <InfoPage />
            </Route>
            <Route path="/chat/">
              <Chatbot />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
