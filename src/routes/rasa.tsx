import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import queryString from 'query-string'

import RasaPage from '../pages/rasa'

const USER_ID_QUERY_PARAMETER = 'uid'
const RASA_GREET_INTENT = 'greet'
const RASA_CHECKIN_INTENT = 'daily_checkin'
const RASA_METADATA_ENTITY = 'metadata'
const RASA_TIMEZONE_PARAMETER = 'timezone'
const RASA_USER_ID_PARAMETER = 'user_id'

function parseQueryString() {
  const hash = window.location.hash
  return queryString.parse(hash.substr(hash.indexOf('?')))
}

function getStringParameter(parameter: string): string | undefined {
  const value = parseQueryString()[parameter]
  if (typeof value === 'string') return value
  return undefined
}

function getTimezone(): string {
  const defaultDateTimeFormat = new Intl.DateTimeFormat()
  return defaultDateTimeFormat.resolvedOptions().timeZone
}

function createPayload(
  intent: string,
  metadata: { [key: string]: string }
): string {
  return `/${intent}{"${RASA_METADATA_ENTITY}":${JSON.stringify(metadata)}}`
}

function renderDefault(props: {}): JSX.Element {
  const metadata = {}
  const timezone = getTimezone()
  if (timezone) metadata[RASA_TIMEZONE_PARAMETER] = timezone

  const payload = createPayload(RASA_GREET_INTENT, metadata)
  return <RasaPage {...props} initPayload={payload} />
}

function renderCheckin(props: {}): JSX.Element {
  const userId = getStringParameter(USER_ID_QUERY_PARAMETER)
  if (!userId) return renderDefault(props)

  const metadata = { [RASA_USER_ID_PARAMETER]: userId }
  const payload = createPayload(RASA_CHECKIN_INTENT, metadata)
  return <RasaPage {...props} initPayload={payload} />
}

function RasaRoute() {
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/ci`} render={renderCheckin} />
      <Route path={path} render={renderDefault} />
    </Switch>
  )
}

export default RasaRoute
