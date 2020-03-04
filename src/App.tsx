import React from 'react'

import ChatBot from 'react-simple-chatbot'

function App() {
  return (
    <ChatBot
      steps={[
        {
          id: 'hello-world',
          message: 'Hello World!',
          end: true
        }
      ]}
    />
  )
}

export default App
