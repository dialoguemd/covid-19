import React from 'react'

import styled from 'styled-components/macro'
import { CustomComponentProps } from 'react-simple-chatbot'

import Results from './results'

const MOCK_RESULTS = ['test', 'test2', 'this-file-doesnt-exist']

const MdContainer = styled.div`
  width: 100%;
`

export const ResultsBubble: React.FC<Partial<CustomComponentProps>> = () => {
  const results = MOCK_RESULTS // FIXME: derive from props
  return (
    <MdContainer>
      <Results results={results} />
    </MdContainer>
  )
}

export default ResultsBubble
