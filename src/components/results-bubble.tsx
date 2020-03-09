import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { getChatClassesFromSteps } from 'services/chat-classifier'

const ViewReportContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const ViewReportButton = styled(Link)`
  font-size: ${props => props.theme.sizes.buttonText};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  border-radius: 28px;
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75) 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-width: 6em;
  margin: 3px;
  color: #fff;
  text-decoration: none;
  background: #079af3;
  display: block;
  text-align: center;
`

export const ResultsBubble: React.FC = (props: any) => {
  const { t } = useTranslation()
  const [classes, setClasses] = useState([])
  useEffect(() => {
    async function processSteps() {
      const classes = await getChatClassesFromSteps(props.steps)
      setClasses(classes)
    }
    processSteps()
  }, [props.steps])

  const resultsLink = `/info?id=${classes.join(',')}`

  return (
    <ViewReportContainer>
      <ViewReportButton to={resultsLink}>
        {t('share.viewResults')}
      </ViewReportButton>
    </ViewReportContainer>
  )
}

export default ResultsBubble
