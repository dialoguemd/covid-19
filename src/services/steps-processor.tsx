import React from 'react'

import stripIndent from 'strip-indent'
import { Step, TextStep, OptionStep, StepTrigger } from 'react-simple-chatbot'

import MarkdownBubble from 'components/markdown-bubble'

const isTextStep = (step: Step): step is TextStep => {
  return typeof (step as TextStep).message === 'string'
}

const isOptionStep = (step: Step): step is OptionStep => {
  return Array.isArray((step as OptionStep).options)
}

const addMarkdownToTextStep = (step: Step): Step => {
  if (!isTextStep(step)) return step

  const { message, ...rest } = step
  return {
    ...rest,
    asMessage: true,
    component: <MarkdownBubble>{stripIndent(message as string)}</MarkdownBubble>
  }
}

const addAnalyticsToOptionStep = (step: Step): Step => {
  if (!isOptionStep(step)) return step

  const wrappedOptions = step.options.map(option => {
    const triggerWrapper: StepTrigger = data => {
      const triggerId =
        typeof option.trigger === 'function'
          ? option.trigger(data)
          : option.trigger

      analytics.track('answered_question', {
        question_id: step.id,
        value: option.value,
        next_step: triggerId
      })

      return triggerId
    }

    return {
      ...option,
      trigger: triggerWrapper
    }
  })

  return { ...step, options: wrappedOptions }
}

const TRANSFORMS = [addMarkdownToTextStep, addAnalyticsToOptionStep]

// sequentially apply transforms to a step
export const transformStep = (step: Step): Step => {
  return TRANSFORMS.reduce(
    (transformedStep, transformFn) => transformFn(transformedStep),
    step
  )
}
