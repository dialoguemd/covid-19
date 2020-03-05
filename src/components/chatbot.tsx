import React from 'react'

import ReactSimpleChatbot from 'react-simple-chatbot'
import styled, { ThemeProvider } from 'styled-components/macro'
import { getChatClassifications } from 'services/chat-classifier'

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

const navigateToResults = results => {
  const query = results.join(',')
  const url = `result=${query}`
  window.location.search = url
}

const handleEnd = async payload => {
  const results = await getChatClassifications(payload)
  navigateToResults(results)
}

const StyledChatbot = styled(ReactSimpleChatbot)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  /* Removes shadow around avatar */
  .rsc-ts-bot .rsc-ts-image {
    box-shadow: none;
  }

  .rsc-container {
    box-shadow: none;
    border-radius: 0;
  }

  .rsc-content {
    height: calc(100% - 51px);
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .rsc-ts-bubble {
    font-size: ${props => props.theme.sizes.question};
    padding: calc(${props => props.theme.sizes.question} * 0.75);
    margin-top: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .rsc-os {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-grow: 1;
  }

  .rsc-os-options {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-radius: 35px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    padding: 0;
    min-width: 25vw;
  }

  .rsc-os-option:first-child {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  }

  .rsc-os-option {
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
  }

  .rsc-os-option-element {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.sizes.buttonText};
    padding: calc(${props => props.theme.sizes.buttonText} * 1);
    border-radius: 0;
    font-weight: 500;
    background: transparent;
    border-width: 0;
    box-shadow: none;
    width: 100%;
    text-align: right;
  }
`

export const Chatbot: React.FC = props => {
  return (
    <ThemeProvider theme={makeTheme}>
      <StyledChatbot
        {...props}
        steps={steps}
        handleEnd={handleEnd}
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
