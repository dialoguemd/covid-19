import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams
} from 'react-router-dom'

import RasaPage from '../pages/rasa'

const RASA_GREET_INTENT = 'greet'
const RASA_CHECKIN_INTENT = 'daily_checkin'
const RASA_METADATA_ENTITY = 'metadata'
const RASA_TIMEZONE_PARAMETER = 'timezone'
const RASA_REMINDER_ID_PARAMETER = 'reminder_id'

const getTimezone = (): string =>
  new Intl.DateTimeFormat().resolvedOptions().timeZone

const createPayload = (
  intent: string,
  metadata: { [key: string]: string }
): string => `/${intent}{"${RASA_METADATA_ENTITY}":${JSON.stringify(metadata)}}`

const Rasa: React.FC = props => {
  const metadata = {}
  const timezone = getTimezone()
  if (timezone) metadata[RASA_TIMEZONE_PARAMETER] = timezone

  const payload = createPayload(RASA_GREET_INTENT, metadata)
  return <RasaPage {...props} initPayload={payload} />
}

const RasaCheckin: React.FC = props => {
  const params = useParams<{ rid: string }>()

  const metadata = { [RASA_REMINDER_ID_PARAMETER]: params.rid }
  const payload = createPayload(RASA_CHECKIN_INTENT, metadata)
  return <RasaPage {...props} initPayload={payload} />
}

const RasaRoute: React.FC = () => {
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <Rasa />
      </Route>
      <Route exact path={`${path}/ci/:rid`}>
        <RasaCheckin />
      </Route>
      <Redirect to={path} />
    </Switch>
  )
}

export default RasaRoute
