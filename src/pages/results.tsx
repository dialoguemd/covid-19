import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Results from 'components/results'

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

export const ResultsPage: React.FC = () => {
  const query = useQuery()

  // parse /results?id=a,b,c -> [a, b, c]
  const queryResults = query.get('id')
  const results = queryResults ? queryResults.split(',') : []

  const hasResults = results.length > 0

  return (
    <ResultsCard>
      {hasResults ? (
        <Results results={results} />
      ) : (
        <div>
          <h2>No results provided in URL.</h2>
          <div>
            <Link to="/chat/">back to questionnaire?</Link>
          </div>
        </div>
      )}
    </ResultsCard>
  )
}

export default ResultsPage
