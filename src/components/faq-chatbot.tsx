import React, { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import Chatbot from './chatbot'
import { requireRegionFile } from 'services/region-loader'
import { Step } from 'react-simple-chatbot'
import FaqAnswerBubble from './faq-answer-bubble'

const config = requireRegionFile('config.json')

const faqSteps: Step[] = config.ENABLE_FAQ_BOT
  ? requireRegionFile('steps.faq.json')
  : []

if (config.ENABLE_FAQ_BOT) {
  faqSteps.push({
    id: 'showAnswers',
    waitAction: true,
    asMessage: true,
    hideInput: true,
    component: <FaqAnswerBubble />,
    trigger: 'utterAskForAnswerFeedback'
  })
}

const FaqChatbot: React.FC = props => {
  const { i18n, t } = useTranslation()

  const handleEnd = useCallback(({ renderedSteps }) => {
    renderedSteps
      .filter(step => step.id === 'userQuestion')
      .map(step => step.value)
      .forEach(question => {
        analytics.track(
          'user_faq_question',
          {
            value: question
          },
          { context: { ip: '0.0.0.0' } }
        )
      })
  }, [])

  return (
    <Chatbot
      {...props}
      key={i18n.languages[0]}
      steps={faqSteps}
      handleEnd={handleEnd}
      placeholder={t('resultsPage.faqInputPlaceholder')}
      showInput
    />
  )
}

export default FaqChatbot
