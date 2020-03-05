import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { loadResults } from 'services/results-loader'

export interface Props {
  results: string[]
}

const StyledMarkdown = styled(ReactMarkdown)`
  color: ${props => props.theme.colors.text};

  h1 {
    line-height: 1.5;
    border-bottom: 1px solid ${props => props.theme.colors.primaryLight};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  hr {
    border: 1px dashed ${props => props.theme.colors.primaryLight};
  }
`

export const Results: React.FC<Props> = ({ results }) => {
  const [contents, setContents] = useState<string>(null)

  useEffect(() => {
    if (results) {
      loadResults(results).then(setContents)
    }
  }, [results])

  return contents && <StyledMarkdown source={contents} />
}

export default Results
