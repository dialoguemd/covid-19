import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import CtaButtonLink from 'components/cta-button-link'
import { getChatClassesFromSteps } from 'services/chat-classifier'

const ViewReportContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

export const ResultsBubble: React.FC = (props: any) => {
  const { t } = useTranslation()
  const [classes, setClasses] = useState([])
  useEffect(() => {
    async function processSteps() {
      const classes = await getChatClassesFromSteps(props.steps)
      localStorage.setItem('resulting_classes', classes)
      setClasses(classes)
    }
    processSteps()
  }, [props.steps])

  const resultsLink = `/info?id=${classes.join(',')}`

  return (
    <ViewReportContainer>
      <CtaButtonLink to={resultsLink}>{t('share.viewResults')}</CtaButtonLink>
    </ViewReportContainer>
  )
}

export default ResultsBubble
