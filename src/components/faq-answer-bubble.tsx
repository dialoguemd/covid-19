import React, { useState, useEffect } from 'react'

import {
  CustomComponentProps,
  UserStep,
  CustomStep,
  Loading
} from 'react-simple-chatbot'
import { useTranslation } from 'react-i18next'
import stripIndent from 'strip-indent'

import { getAnswers } from 'services/faq'
import Markdown from './markdown'

interface Props extends CustomComponentProps {
  previousStep: UserStep & { value: string }
  step: CustomStep
}

const FaqAnswerBubble: React.FC<Partial<Props>> = ({
  previousStep,
  triggerNextStep
}) => {
  const [content, setContent] = useState<string>(null)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const question = previousStep.value

    const loadAnswer = async () => {
      try {
        const answers = await getAnswers(question, i18n.languages[0])

        analytics.track(
          'user_faq_answer',
          {
            question,
            answers
          },
          { context: { ip: '0.0.0.0' } }
        )

        const content =
          answers.length === 0
            ? t('steps:faq.utterHasNoAnswers')
            : `${t('steps:faq.utterHasAnswers')}\n${answers.join('\n\n')}`

        setContent(content)
        triggerNextStep()
      } catch (e) {
        setContent(t('steps:faq.utterGetAnswersError'))
        triggerNextStep({ trigger: 'utterQuestionAsked', value: null }) // skip feedback on error
      }
    }

    loadAnswer()
  }, [previousStep, triggerNextStep, t, i18n])

  if (!content) {
    return <Loading />
  }

  return <Markdown>{stripIndent(content)}</Markdown>
}

export default FaqAnswerBubble
