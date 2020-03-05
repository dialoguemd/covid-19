import React from 'react'

import styled, { ThemeProvider } from 'styled-components'

import Chatbot from './components/chatbot'
import Footer from './components/footer'
import { theme } from './theme'

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Chatbot />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
