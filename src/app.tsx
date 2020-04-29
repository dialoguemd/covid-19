import React, { useEffect } from 'react'

import styled, { ThemeProvider } from 'styled-components/macro'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import InfoPage from './pages/info'
import WelcomePage from './pages/welcome'
import RasaRoute from './routes/rasa'
import QuestionnairePage from './pages/questionnaire'
import { theme } from './theme'
import GlobalStyles from './styles'

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AppRoute: React.FC = () => {
  const { i18n } = useTranslation()
  let { path, params } = useRouteMatch<{ locale: string }>()

  useEffect(() => {
    const lang = i18n.languages[0]

    if (lang !== params.locale) {
      i18n.changeLanguage(params.locale)
    }
  }, [i18n, params.locale])

  return (
    <Switch>
      <Route exact path={path}>
        <WelcomePage />
      </Route>
      <Route path={`${path}/info`}>
        <InfoPage />
      </Route>
      <Route path={`${path}/chat`}>
        <QuestionnairePage />
      </Route>
      <Route path={`${path}/rasa`}>
        <RasaRoute />
      </Route>
      <Route path={`${path}/*`}>
        <Redirect to={path} />
      </Route>
    </Switch>
  )
}

const App = () => {
  const { i18n } = useTranslation()

  const detectedLanguage = i18n.languages[0]
  const supportedLanguages = i18n.languages.join('|')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Switch>
            <Route path={`/:locale(${supportedLanguages})`}>
              <AppRoute />
            </Route>
            <Redirect to={`/${detectedLanguage}`} />
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
