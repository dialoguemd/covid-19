import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Footer from 'components/footer'
import Header from 'components/header'
import Title from 'components/title'
import ScrollAnchor from 'components/scroll-anchor'
import { CtaButton } from 'components/buttons'

import { requireRegionFile } from 'services/region-loader'
import { checkClassesValidity } from 'services/content'
import RasaChatbot, { open as openRasaChatbot } from 'components/rasa-chatbot'

import chloe from 'images/chloe.png'

const config = requireRegionFile('config.json')
const flagImage = requireRegionFile('images/flag.jpg')

const SHOW_PREVIOUS_RESULTS_LINK = config.ENABLE_PREVIOUS_RESULTS_LINK

const RASA_INIT_PAYLOAD = process.env.REACT_APP_RASA_INIT_PAYLOAD
const RASA_SOCKET_PATH = process.env.REACT_APP_RASA_SOCKET_PATH
const RASA_SOCKET_ENDPOINTS = {
  en: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_EN,
  fr: process.env.REACT_APP_RASA_SOCKET_ENDPOINT_FR
}

const Description = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText});
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 200;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
`

const Subtext = styled.h4`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText} * 0.75);
  padding: 0 0.75em;
  font-weight: 200;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Body = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 18px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  z-index: 1;
`

const FooterContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const Flag = styled.div`
  width: 16vw;
  height: 16vw;
  top: -16vw;
  right: 0px;
  background-image: url(${flagImage});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: absolute;
  z-index: 0;
`

export const WelcomePage: React.FC = () => {
  const { t, i18n } = useTranslation()

  const language = i18n.languages[0]
  const socketUrl = RASA_SOCKET_ENDPOINTS[language] || RASA_SOCKET_ENDPOINTS.en

  const previousRunClasses = localStorage.getItem('resulting_classes')
  const previousRunIsValid =
    previousRunClasses && checkClassesValidity(previousRunClasses.split(','))

  return (
    <Container>
      <ScrollAnchor />
      <Header
        showRegionPicker
        css={`
          flex-shrink: 0;
        `}
      />
      <Body>
        <Title>{t('welcomePage.title')}</Title>
        <Description>{t('welcomePage.description')}</Description>
        <CtaButton onClick={openRasaChatbot}>
          {t('welcomePage.button')}
        </CtaButton>
        <Subtext>
          {SHOW_PREVIOUS_RESULTS_LINK && previousRunClasses && (
            <p>
              {previousRunIsValid ? (
                <Link to={`/info?id=${previousRunClasses}`}>
                  {t('welcomePage.previousRunLink')}
                </Link>
              ) : (
                t('welcomePage.previousRunExpired')
              )}
            </p>
          )}
        </Subtext>
        <RasaChatbot
          initPayload={RASA_INIT_PAYLOAD}
          inputTextFieldHint={t('rasaChatWidget.inputTextFieldHint')}
          profileAvatar={chloe}
          socketPath={RASA_SOCKET_PATH}
          socketUrl={socketUrl}
          storage="session"
          subtitle={t('rasaChatWidget.subtitle')}
          title="Chloe"
        />
      </Body>
      <FooterContainer>
        <Flag />
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default WelcomePage
