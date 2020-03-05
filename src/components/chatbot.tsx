import React from 'react'

import ReactSimpleChatbot from 'react-simple-chatbot'
import styled, { ThemeProvider } from 'styled-components/macro'

import steps from 'steps'
import { theme } from 'theme'
import chloe from 'images/chloe.png'

const makeTheme = ({ colors, sizes, fontFamily }: typeof theme) => ({
  background: colors.background,
  headerBgColor: colors.primary,
  headerFontColor: colors.backgroundLight,
  headerFontSize: sizes.question,
  botBubbleColor: colors.backgroundLight,
  botFontColor: colors.text,
  userBubbleColor: colors.secondaryLight,
  userFontColor: colors.backgroundLight,
  fontFamily,
  colors,
  sizes
})

const StyledChatbot = styled(ReactSimpleChatbot)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .rsc-container {
    box-shadow: none;
    border-radius: 0;
  }

  .rsc-content {
    height: calc(100% - 51px);
  }

  .rsc-ts-bubble {
    font-size: ${props => props.theme.sizes.question};
    padding: calc(${props => props.theme.sizes.question} * 0.75);
  }
  .rsc-os-option-element {
    font-size: ${props => props.theme.sizes.buttonText};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  }
`

export const Chatbot: React.FC = props => {
  return (
    <ThemeProvider theme={makeTheme}>
      <StyledChatbot
        {...props}
        steps={steps}
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

export default Chatbot
