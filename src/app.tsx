import React from 'react'

import styled, { ThemeProvider } from 'styled-components/macro'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import InfoPage from './pages/info'
import WelcomePage from './pages/welcome'
import RasaRoute from './routes/rasa'
import { theme } from './theme'
import GlobalStyles from './styles'

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
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route path="/info/">
              <InfoPage />
            </Route>
            <Route path="/chat">
              <RasaRoute />
            </Route>
            {/* Temporarily supporting old /rasa URL for backward compatibility */}
            <Redirect from="/rasa*" to="/chat*" />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
