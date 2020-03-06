import React, { useEffect, useState } from 'react'

import styled from 'styled-components/macro'
import { getChatClassifications } from 'services/chat-classifier'

import Results from './results'

const MdContainer = styled.div`
  width: 100%;
`

export const ResultsBubble: React.FC = (props: any) => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    async function processSteps() {
      const steps = Object.values(props.steps)
      const answeredSteps = steps.filter(
        (step: any) => step.value !== undefined
      )
      const classes = await getChatClassifications(answeredSteps)
      setClasses(classes)
    }
    processSteps()
  }, [props.steps])

  return (
    <MdContainer>
      <Results classes={classes} />
    </MdContainer>
  )
}

export default ResultsBubble
