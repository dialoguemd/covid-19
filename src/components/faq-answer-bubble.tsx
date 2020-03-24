import React, { useState, useEffect } from 'react'

import {
  CustomComponentProps,
  UserStep,
  CustomStep
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
  const { t } = useTranslation()

  useEffect(() => {
    const question = previousStep.value

    const loadAnswer = async () => {
      try {
        const answers = await getAnswers(question)
        const content =
          answers.length === 0
            ? t('steps:faq.utterHasNoAnswers')
            : `${t('steps:faq.utterHasAnswers')}\n${answers.join('\n\n')}`
        setContent(content)
        triggerNextStep()
      } catch (e) {
        setContent(t('steps:faq.utterGetAnswersError'))
        triggerNextStep({ trigger: 'utterQuestionAsked', value: null })
      }
    }

    loadAnswer()
  }, [previousStep, triggerNextStep, t])

  if (!content) {
    return null
  }

  return <Markdown>{stripIndent(content)}</Markdown>
}

export default FaqAnswerBubble
