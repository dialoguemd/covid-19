import React from 'react'

import stripIndent from 'strip-indent'
import {
  Step,
  TextStep,
  OptionStep,
  StepTrigger,
  UserStep
} from 'react-simple-chatbot'

import i18n from './i18n'
import MarkdownBubble from 'components/markdown-bubble'

// get a tFunction scoped to 'steps' NS
const stepsT = i18n.getFixedT(null, 'steps')

const isTextStep = (step: Step): step is TextStep => {
  return typeof (step as TextStep).message === 'string'
}

const isOptionStep = (step: Step): step is OptionStep => {
  return Array.isArray((step as OptionStep).options)
}

const isUserStep = (step: Step): step is UserStep => {
  return (step as UserStep).user
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

      analytics.track(
        'answered_question',
        {
          question_id: step.id,
          value: option.value,
          next_step: triggerId
        },
        { context: { ip: '0.0.0.0' } }
      )

      return triggerId
    }

    return {
      ...option,
      trigger: triggerWrapper
    }
  })

  return { ...step, options: wrappedOptions }
}

const addAnalyticsToInputStep = (step: Step): Step => {
  if (!isUserStep(step)) {
    return step
  }

  const triggerWrapper: StepTrigger = data => {
    const triggerId =
      typeof step.trigger === 'function' ? step.trigger(data) : step.trigger

    analytics.track(
      'answered_question',
      {
        question_id: step.id,
        value: data.value,
        next_step: triggerId
      },
      { context: { ip: '0.0.0.0' } }
    )

    return triggerId
  }

  return { ...step, trigger: triggerWrapper }
}

const addI18n = (step: Step): Step => {
  if (isTextStep(step) && typeof step.message === 'string') {
    return { ...step, message: stepsT(step.message) }
  }

  if (isOptionStep(step)) {
    const optionsI18n = step.options.map(option => ({
      ...option,
      label: stepsT(option.label)
    }))
    return { ...step, options: optionsI18n }
  }

  return step
}

const TRANSFORMS = [
  addI18n,
  addMarkdownToTextStep,
  addAnalyticsToOptionStep,
  addAnalyticsToInputStep
]

// sequentially apply transforms to a step
export const transformStep = (step: Step): Step => {
  return TRANSFORMS.reduce(
    (transformedStep, transformFn) => transformFn(transformedStep),
    step
  )
}
