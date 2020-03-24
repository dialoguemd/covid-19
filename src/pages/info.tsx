import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'

import Results from 'components/results'
import Header from 'components/header'
import Footer from 'components/footer'
import Title from 'components/title'
import ShareResults from 'components/share-results'
import ScrollAnchor from 'components/scroll-anchor'
import { CtaButton } from 'components/buttons'
import { requireRegionFile } from 'services/region-loader'
import FaqChatbot from 'components/faq-chatbot'
import { mobileBreakpoint } from 'theme'

const config = requireRegionFile('config.json')

const useQuery = () => {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

const InfoCard = styled.div`
  max-width: 85vw;
  margin: 12px;
  padding: 16px;
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  /* so that it doesn't look too flickly on initial load */
  min-width: 200px;
  min-height: 500px;
  > div {
    width: 100%;
    max-width: 1000px;
    align-items: center;
    flex-shrink: 0;
  }

  a {
    word-break: break-all;
  }
`

const Audience = styled.div`
  color: ${props => props.theme.colors.text};
  margin: 15px 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
`

const HeaderLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  margin-top: 16px;
`

const HeaderLinkSubTitle = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.buttonText};
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: normal;
  flex-shrink: 0;
  text-align: center;
`

const ClassList = styled.h4`
  margin: 0 8px 0 12px;
  font-size: 18px;
  font-weight: normal;
`

const InfoPageContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const FaqChatbotContainer = styled.div`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  height: 600px;
  width: calc(100% - 24px);
  max-width: 1032px;
  margin: 12px;

  display: block;
  z-index: 1000000;
  -webkit-transform: translateZ(0px);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-perspective: 1000;
  .rsc-container {
    background: transparent;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    height: 400px;
  }
`

export const InfoPage: React.FC = () => {
  const query = useQuery()
  const { t } = useTranslation()

  // parse /info?id=a,b,c -> [a, b, c]
  const queryClasses = query.get('id')
  const classes = queryClasses ? queryClasses.split(',') : []

  // build a comma separated, readable list of classes
  const classString = classes
    .map(className => t(`classes.${className}`))
    .join(', ')

  const hasClasses = classes.length > 0

  return (
    <InfoPageContainer>
      <ScrollAnchor />
      <Header />
      {hasClasses && (
        <>
          <Title>{t('resultsPage.headerTitle')}</Title>
          <Audience>
            <ClassList>
              {t('resultsPage.audiencePrefix')} {classString}
            </ClassList>
            <HeaderLinkContainer>
              <HeaderLinkSubTitle>
                {t('resultsPage.changeAudienceTitle')}
              </HeaderLinkSubTitle>
              <CtaButton as={Link} to="/chat/">
                {t('resultsPage.changeAudience')}
              </CtaButton>
            </HeaderLinkContainer>
          </Audience>
          <InfoCard>
            <div>
              <Results classes={classes} />
            </div>
          </InfoCard>
          <Spacer />
          <ShareResults classes={classes} />
        </>
      )}
      {config.ENABLE_FAQ_BOT ? (
        <FaqChatbotContainer>
          <FaqChatbot />
        </FaqChatbotContainer>
      ) : (
        <InfoCard
          css={`
            min-height: 0;
            max-width: 1000px;
          `}
        >
          <p>{t('resultsPage.noResultsMessage')}</p>
        </InfoCard>
      )}
      <Footer />
    </InfoPageContainer>
  )
}

export default InfoPage
