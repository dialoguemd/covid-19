import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Header from 'components/header'
import ScrollAnchor from 'components/scroll-anchor'
import RasaChatbot from 'components/rasa-chatbot'

import chloe from 'images/chloe.png'

const RASA_INIT_PAYLOAD = process.env.REACT_APP_RASA_INIT_PAYLOAD
const RASA_SOCKET_PATH = process.env.REACT_APP_RASA_SOCKET_PATH
const RASA_SOCKET_ENDPOINTS = {
  en: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_EN,
  fr: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_FR
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

export const WelcomePage: React.FC = () => {
  const { t, i18n } = useTranslation()

  const language = i18n.languages[0]
  const socketUrl = RASA_SOCKET_ENDPOINTS[language] || RASA_SOCKET_ENDPOINTS.en

  return (
    <Container>
      <ScrollAnchor />
      <Header
        showRegionPicker
        css={`
          flex-shrink: 0;
          margin: 0;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          z-index: 1000000;
        `}
      />
      <Body>
        <RasaChatbot
          initPayload={RASA_INIT_PAYLOAD}
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

export default WelcomePage
