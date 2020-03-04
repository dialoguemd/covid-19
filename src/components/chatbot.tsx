import React from 'react'

import ReactSimpleChatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

import { theme } from '../theme'

const makeTheme = ({ colors, sizes, fontFamily }: typeof theme) => ({
  fontFamily,
  background: colors.background,
  headerBgColor: colors.primary,
  headerFontColor: colors.backgroundLight,
  headerFontSize: sizes.question,
  botBubbleColor: colors.backgroundLight,
  botFontColor: colors.text,
  userBubbleColor: colors.secondaryLight,
  userFontColor: colors.backgroundLight
})

export const Chatbot: React.FC = () => {
  return (
    <ThemeProvider theme={makeTheme}>
      <ReactSimpleChatbot
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World!',
            end: true
          }
        ]}
      />
    </ThemeProvider>
  )
}

export default Chatbot
