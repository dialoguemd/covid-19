import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Results from 'components/results'
import { mobileBreakpoint } from 'theme'
import { useTranslation } from 'react-i18next'

const useQuery = () => {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

const ResultsCard = styled.div`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  margin: 12px;
  padding: 16px;
`

const Header = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.backgroundLight};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 10px 6px;
  }
`

const Title = styled.div`
  flex: 1 1 600px;
  font-size: ${props => props.theme.sizes.title};
  margin: 6px;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: ${props => props => props.theme.sizes.buttonText};
  }
`

const HeaderLink = styled(Link)`
  background-color: ${props => props.theme.colors.backgroundLight};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props => props.theme.sizes.buttonText};
  padding: 12px;
  text-decoration: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: 500;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`

const ResultsPageContainer = styled.div`
  overflow: auto;
`

export const ResultsPage: React.FC = () => {
  const query = useQuery()
  const { t } = useTranslation()

  // parse /results?id=a,b,c -> [a, b, c]
  const queryClasses = query.get('id')
  const classes = queryClasses ? queryClasses.split(',') : []

  const hasClasses = classes.length > 0

  return (
    <ResultsPageContainer>
      <Header>
        <Title>{t('resultsPage.headerTitle')}</Title>
        <HeaderLink to="/chat/">{t('resultsPage.headerButton')}</HeaderLink>
      </Header>
      <ResultsCard>
        {hasClasses ? (
          <Results classes={classes} />
        ) : (
          <div>
            <h2>{t('resultsPage.noResultsMessage')}</h2>
            <div>
              <Link to="/chat/">{t('resultsPage.backToQuestionnaire')}</Link>
            </div>
          </div>
        )}
      </ResultsCard>
    </ResultsPageContainer>
  )
}

export default ResultsPage
