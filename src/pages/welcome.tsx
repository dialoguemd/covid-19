import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Footer from 'components/footer'
import Header from 'components/header'
import Title from 'components/title'
import ScrollAnchor from 'components/scroll-anchor'
import { CtaButtonLink } from 'components/buttons'

import { requireRegionFile } from 'services/region-loader'
import { checkClassesValidity } from 'services/content'

const config = requireRegionFile('config.json')
const flagImage = requireRegionFile('images/flag.jpg')

const SHOW_PREVIOUS_RESULTS_LINK = config.ENABLE_PREVIOUS_RESULTS_LINK

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
  const { t } = useTranslation()

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
        <div>
          <CtaButtonLink to="/chat/">
            {t('welcomePage.button')}
          </CtaButtonLink>
        </div>
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
      </Body>
      <FooterContainer>
        <Flag />
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default WelcomePage
