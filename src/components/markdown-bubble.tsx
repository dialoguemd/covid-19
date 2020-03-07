import React from 'react'

import { CustomComponentProps } from 'react-simple-chatbot'

import Markdown from './markdown'

export const MarkdownBubble: React.FC<Partial<CustomComponentProps>> = ({
  previousStep,
  step,
  steps,
  ...rest
}) => {
  const size = step.metadata && step.metadata.size

  return <Markdown linkTarget="_blank" size={size} {...rest} />
}

export default MarkdownBubble
