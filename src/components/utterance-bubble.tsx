import React, { useState, useEffect } from 'react'
import {
  UserStep,
  CustomStep,
  CustomComponentProps
} from 'react-simple-chatbot'

import Markdown from './markdown'

interface UtterResponse {
  message: string
  wait_for_user: boolean
}

// FIXME: use a real service
//entering 'break' will cause bot to exit,
// anything else will cause a repeat of the loop
const mockPostToRasa = (userInput: string) => {
  const shouldBreakLoop = userInput === 'break'

  return new Promise<UtterResponse>(resolve => {
    setTimeout(() => {
      resolve({
        message: `Response to: ${userInput}\n\nType \`break\` to continue regular flow`,
        wait_for_user: !shouldBreakLoop
      })
    }, 500)
  })
}

// previousStep	PropTypes.object	Previous step rendered
// step	PropTypes.object	Current step rendered
// steps	PropTypes.object	All steps rendered
// triggerNextStep({ value, trigger })
interface Props extends CustomComponentProps {
  previousStep: UserStep & { value: string }
  step: CustomStep
}

const UtteranceBubble: React.FC<Partial<Props>> = ({
  previousStep,
  triggerNextStep
}) => {
  const [utterResponse, setUtterResponse] = useState<UtterResponse>(null)

  useEffect(() => {
    const userInput = previousStep.value

    mockPostToRasa(userInput).then(setUtterResponse)
  }, [previousStep])

  useEffect(() => {
    if (!utterResponse) return

    if (utterResponse.wait_for_user) {
      triggerNextStep({ trigger: previousStep.id, value: null }) // go back to previous user input
    } else {
      triggerNextStep() // go to step defined in rules
    }
  }, [utterResponse, triggerNextStep, previousStep])

  return utterResponse ? (
    <Markdown>{utterResponse.message}</Markdown>
  ) : (
    <div>Loading...</div>
  )
}

export default UtteranceBubble
