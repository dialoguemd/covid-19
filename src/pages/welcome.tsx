import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import LanguagePicker from 'components/language-picker'
import logo from 'images/logo.png'

const Container = styled.div`
  overflow: auto;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 1.5);
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 500;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 2);
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  h3 {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 200;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  a {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
  }
`

export const WelcomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div
        css={`
          display: flex;
          align-items: flex-start;
        `}
      >
        <img src={logo} alt="Dialogue" />
        <span
          css={`
            flex: 1 1 auto;
          `}
        />
        <LanguagePicker />
      </div>
      <h2>{t('welcomePage.title')}</h2>
      <h3>{t('welcomePage.description')}</h3>

      <Link to="/chat/">{t('welcomePage.button')}</Link>
    </Container>
  )
}

export default WelcomePage
