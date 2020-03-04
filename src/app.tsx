import React from 'react'

import { ThemeProvider } from 'styled-components'

import Chatbot from './components/chatbot'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chatbot />
    </ThemeProvider>
  )
}

export default App
