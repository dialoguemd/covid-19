import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import Feedback from 'components/feedback'
import moment from 'moment'

import { getManifestFileFromPath } from 'services/content'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TimeStamps = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  opacity: 0.5;
`

const getModifiedTime = filePath => {
  const file = getManifestFileFromPath(filePath)
  return file && file.modified && moment(file.modified).format('LLL')
}

export const ResultFooter: React.FC<any> = ({ id }) => {
  const { t } = useTranslation()
  const modified = getModifiedTime(id)
  return (
    <Container>
      <TimeStamps>
        {modified && (
          <div>{t('resultsPage.lastModified', { date: modified })}</div>
        )}
      </TimeStamps>
      <Feedback id={id} />
    </Container>
  )
}

export default ResultFooter
