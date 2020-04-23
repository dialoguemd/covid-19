import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import queryString from 'query-string'

import RasaPage from '../pages/rasa'

function parseQueryString() {
  const hash = window.location.hash
  return queryString.parse(hash.substr(hash.indexOf('?')))
}

function getStringParameter(parameter) {
  const uid = parseQueryString()[parameter]
  if (typeof uid === 'string') return uid
  return undefined
}

function getTimezone() {
  const defaultDateTimeFormat = new Intl.DateTimeFormat()
  return defaultDateTimeFormat.resolvedOptions().timeZone
}

function RouteRasa() {
  let { path } = useRouteMatch()

  const renderDefault = props => {
    const timezone = getTimezone()
    return <RasaPage {...props} timezone={timezone} />
  }

  const renderCheckin = props => {
    const uid = getStringParameter('uid')
    return <RasaPage {...props} userId={uid} />
  }

  return (
    <Switch>
      <Route path={`${path}/ci`} render={renderCheckin} />
      <Route path={path} render={renderDefault} />
    </Switch>
  )
}

export default RouteRasa
