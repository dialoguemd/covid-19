import React from 'react'

import ReactSimpleChatbot from 'react-simple-chatbot'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import chloe from 'images/chloe.png'

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

export const Chatbot: React.FC = props => {
  return (
    <ThemeProvider theme={makeTheme}>
      <ReactSimpleChatbot
        {...props}
        steps={[
          {
            id: 'hello-world',
            message: 'Hello! Do you live in Canada?',
            trigger: 'is-in-canada'
          },
          {
            id: 'is-in-canada',
            options: [
              { value: true, label: 'Yes', trigger: 'in-canada' },
              { value: false, label: 'No', trigger: 'not-in-canada' }
            ]
          },
          {
            id: 'not-in-canada',
            message: 'Sorry aboot this, we are only available in Canada.'
          },
          {
            id: 'in-canada',
            message: 'Great!'
          }
        ]}
        hideHeader
        hideUserAvatar
        botAvatar={chloe}
        userDelay={400}
        botDelay={800}
        customDelay={800}
        width="100%"
        height="100%"
      />
    </ThemeProvider>
  )
}

export default styled(Chatbot)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  .rsc-container {
    max-width: 600px;
    box-shadow: none;
    border-radius: 0;
    margin: 0;
  }

  .rsc-content {
    height: calc(100% - 51px);
  }
`
