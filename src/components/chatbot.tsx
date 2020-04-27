import React, { useMemo } from 'react'

import ReactSimpleChatbot, { Step } from 'react-simple-chatbot'
import styled, { ThemeProvider, css } from 'styled-components/macro'

import { theme, mobileBreakpoint } from 'theme'
import chloe from 'images/chloe.png'
import { transformStep } from 'services/steps-processor'
import { overrides } from 'services/overrides'

interface Props {
  steps: Step[]
  showInput?: boolean
}

const DISABLE_DELAYS = process.env.NODE_ENV !== 'production'

const INPUT_HEIGHT = 51

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

const WrappedChatbot: React.FC<Props & Record<string, any>> = ({
  showInput,
  ...rest
}) => {
  return <ReactSimpleChatbot {...rest} />
}

const StyledChatbot = styled(WrappedChatbot)`
  height: 100%;
  width: 100%;

  /* Removes shadow around avatar */
  .rsc-ts-bot .rsc-ts-image {
    box-shadow: none;
  }

  .rsc-container {
    box-shadow: none;
    border-radius: 0;
  }

  .rsc-content {
    padding: 15px;
    height: calc(
      100% - ${props => (props.showInput ? INPUT_HEIGHT : 0)}px - 30px
    );
    @media (max-width: ${mobileBreakpoint}px) {
      padding: 10px;
      height: calc(
        100% - ${props => (props.showInput ? INPUT_HEIGHT : 0)}px - 20px
      );
    }
  }

  .rsc-ts-bubble {
    font-size: ${props => props.theme.sizes.question};
    padding: calc(${props => props.theme.sizes.question} * 0.75);
    margin-top: 4px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    @media (max-width: ${mobileBreakpoint}px) {
      max-width: 100%;
    }
  }

  .rsc-cs {
    background: none;
    box-shadow: none;
  }

  .rsc-os {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    justify-content: center;
  }

  .rsc-os-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 15px;
  }

  .rsc-os-option-element {
    z-index: 1000001;
    -webkit-transform: translateZ(0px);
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-perspective: 1000;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.sizes.buttonText};
    font-family: ${props => props.theme.fontFamily};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 500;
    background: ${props => props.theme.colors.backgroundLight};
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    min-width: 6em;
    margin: 3px;
    cursor: pointer;
    @media (max-width: ${mobileBreakpoint}px) {
      padding: 11px;
      font-size: 14px;
    }
  }

  ${props =>
    !props.showInput &&
    css`
      .rsc-footer {
        display: none;
      }
    `}
`

export const Chatbot: React.FC<Props & Record<string, any>> = ({
  steps,
  ...rest
}) => {
  const transformedSteps = useMemo(() => steps.map(transformStep), [steps])

  return (
    <ThemeProvider theme={makeTheme}>
      <StyledChatbot
        {...rest}
        steps={transformedSteps}
        hideHeader
        hideUserAvatar
        botAvatar={overrides.images.botAvatar || chloe}
        userDelay={DISABLE_DELAYS ? 0 : 400}
        botDelay={DISABLE_DELAYS ? 0 : 400}
        customDelay={DISABLE_DELAYS ? 0 : 400}
        width="100%"
        height="100%"
      />
    </ThemeProvider>
  )
}

export default Chatbot
