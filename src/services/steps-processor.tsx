import React from 'react'

import stripIndent from 'strip-indent'
import { Step, TextStep } from 'react-simple-chatbot'

import MarkdownBubble from 'components/markdown-bubble'

export const transformStep = (custom: Step): Step => {
  const isTextStep = typeof (custom as TextStep).message === 'string'

  if (isTextStep) {
    const { message, ...rest } = custom as TextStep
    return {
      ...rest,
      asMessage: true,
      component: (
        <MarkdownBubble>{stripIndent(message as string)}</MarkdownBubble>
      )
    }
  }

  return custom
}
