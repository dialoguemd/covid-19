import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'

import Results from 'components/results'
import Header from 'components/header'
import Footer from 'components/footer'
import ShareResults from 'components/share-results'
import { mobileBreakpoint } from 'theme'

const useQuery = () => {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

const InfoCard = styled.div`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  margin: 12px;
  padding: 16px;
`

const Audience = styled.div`
  color: ${props => props.theme.colors.text};
  flex: 1 1 600px;
  font-size: ${props => props.theme.sizes.title / 2};
  margin: 12px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: ${props => props => props.theme.sizes.buttonText};
  }
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.buttonText};
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: background 200ms linear;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`

const ClassList = styled.h4`
  margin: 0 8px 0 12px;
`

const InfoPageContainer = styled.div`
  overflow: auto;
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
      <Header title={t('resultsPage.headerTitle')} />
      <Audience>
        <ClassList>
          {t('resultsPage.audiencePrefix')} {classString}
        </ClassList>
        <HeaderLink to="/chat/">{t('resultsPage.changeAudience')}</HeaderLink>
      </Audience>
      <InfoCard>
        {hasClasses ? (
          <Results classes={classes} />
        ) : (
          <div>
            <h2>{t('resultsPage.noResultsMessage')}</h2>
            <div>
              <Link to="/chat/">{t('resultsPage.changeAudience')}</Link>
            </div>
          </div>
        )}
      </InfoCard>
      <ShareResults classes={classes} />
      <Footer />
    </InfoPageContainer>
  )
}

export default InfoPage
