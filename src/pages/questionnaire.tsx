import React from 'react'

import Chatbot from 'components/chatbot'
import steps from 'steps'

export const QuestionnairePage: React.FC = props => {
  return <Chatbot {...props} steps={steps} />
}

export default QuestionnairePage
