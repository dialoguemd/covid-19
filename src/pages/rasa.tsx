import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Header from 'components/header'
import ScrollAnchor from 'components/scroll-anchor'
import RasaChatbot from 'components/rasa-chatbot'

import chloe from 'images/chloe.png'

const RASA_GREET_INTENT = process.env.REACT_APP_RASA_GREET_INTENT
const RASA_CHECKIN_INTENT = process.env.REACT_APP_RASA_CHECKIN_INTENT
const RASA_METADATA_ENTITY = process.env.REACT_APP_RASA_METADATA_ENTITY
const RASA_TIMEZONE_PARAMETER = process.env.REACT_APP_RASA_TIMEZONE_PARAMETER
const RASA_USER_ID_PARAMETER = process.env.REACT_APP_RASA_USER_ID_PARAMETER
const RASA_SOCKET_PATH = process.env.REACT_APP_RASA_SOCKET_PATH
const RASA_SOCKET_ENDPOINTS = {
  en: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_EN,
  fr: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_FR
}

interface Props {
  timezone?: string
  userId?: string
}

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
`

const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
`

interface Metadata {
  [key: string]: string
}

// TODO: change intent from env to remove / and pass it right here
const createPayload = (intent: string, metadata: Metadata) => {
  return `/${intent}{"${RASA_METADATA_ENTITY}":${JSON.stringify(metadata)}}`
}

const createDefaultPayload = (timezone?: string) => {
  const metadata = {}
  if (timezone) metadata[RASA_TIMEZONE_PARAMETER] = timezone
  return createPayload(RASA_GREET_INTENT, metadata)
}

const createCheckInPayload = (userId: string) => {
  const metadata = { [RASA_USER_ID_PARAMETER]: userId }
  return createPayload(RASA_CHECKIN_INTENT, metadata)
}

export const RasaPage: React.FC<Props> = ({ timezone, userId }) => {
  const { t, i18n } = useTranslation()
  const language = i18n.languages[0]
  const socketUrl = RASA_SOCKET_ENDPOINTS[language] || RASA_SOCKET_ENDPOINTS.en

  // When userId is set, the user is coming back for check-in.
  const initPayload = userId
    ? createCheckInPayload(userId)
    : createDefaultPayload(timezone)

  return (
    <Container>
      <ScrollAnchor />
      <Header
        showRegionPicker
        hideLogoBackground={true}
        css={`
          flex-shrink: 0;
          margin: 0;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          z-index: 1000000;
        `}
      />
      <Body>
        <RasaChatbot
          initPayload={initPayload}
          inputTextFieldHint={t('rasaChatWidget.inputTextFieldHint')}
          profileAvatar={chloe}
          socketPath={RASA_SOCKET_PATH}
          socketUrl={socketUrl}
          params={{
            storage: 'session'
          }}
          subtitle={t('rasaChatWidget.subtitle')}
          title="Chloe"
        />
      </Body>
    </Container>
  )
}

export default RasaPage
