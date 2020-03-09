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
  font-size: calc(${props => props.theme.sizes.buttonText});
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 800;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  text-decoration: none;
`

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const LogoContainer = styled.div`
  box-shadow: rgb(242, 241, 245) 0px 2px 10px;
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 24px 40px 24px 18px;
  border-bottom-right-radius: 100px;
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
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <span
          css={`
            flex: 1 1 auto;
          `}
        />
        <LanguagePicker />
      </div>
      <Title>{t('welcomePage.title')}</Title>
      <Description>{t('welcomePage.description')}</Description>

      <GetStartedButton to="/chat/">{t('welcomePage.button')}</GetStartedButton>

      <div
        css={`
          flex: 1 1 auto;
        `}
      ></div>

      <Footer />
    </Container>
  )
}

export default WelcomePage
