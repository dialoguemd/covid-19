import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import Footer from 'components/footer'
import { ReactComponent as Logo } from 'images/dialogue-logo.svg'

import LanguagePicker from 'components/language-picker'

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: calc(${props => props.theme.sizes.buttonText} * 2);
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 800;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Description = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText});
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 200;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const GetStartedButton = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText} * 1.25);
  padding: 0.75em 1.25em;
  font-weight: 800;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  text-decoration: none;
  border-radius: 8px;

  transition: background 200ms linear;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`

const Body = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 18px;
`

export const WelcomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Header
        title={t('welcomePage.title')}
        css={`
          flex-shrink: 0;
        `}
      />
      <Body>
        <Description>{t('welcomePage.description')}</Description>
        <div>
          <GetStartedButton to="/chat/">
            {t('welcomePage.button')}
          </GetStartedButton>
        </div>
      </Body>
      <Footer />
    </Container>
  )
}

export default WelcomePage
