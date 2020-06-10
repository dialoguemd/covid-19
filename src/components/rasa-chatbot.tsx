import React, { useLayoutEffect } from 'react'
import { clamp } from 'lodash'

import {
  Widget,
  toggle,
  open,
  close,
  show,
  hide,
  toggleInputDisabled
} from 'rasa-webchat'
import styled from 'styled-components/macro'

import { mobileBreakpoint } from 'theme'

const CHAT_ID = 'chat_id'
const CHAT_SESSION = 'chat_session'

interface Props {
  className?: string
  initPayload: string
  inputTextFieldHint: string
  params: {
    storage: 'local' | 'session'
  }
  profileAvatar: string
  socketPath: string
  socketUrl: string
  subtitle: string
  title: string
}

type Response = {
  text?: string
  quick_replies?: QuickReply[]
  endOfConversation?: boolean
}

type QuickReply = {
  content_type: string
  payload: string
  title: string
}

const WidgetContainer = styled.div`
  width: 100%;
  height: 100%;

  .rw-loading {
    background-color: ${props => props.theme.colors.secondaryLight};
  }

  .rw-widget-embedded .rw-conversation-container {
    box-shadow: none;
  }

  .rw-messages-container {
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    padding: 0;
    -webkit-overflow-scrolling: touch;

    > :first-child {
      padding-top: 12px;
    }

    > :last-child {
      padding-bottom: 5px;
    }
  }

  .rw-sender {
    background-color: ${props => props.theme.colors.background};
    height: 40px;
    padding: 10px;
  }

  .rw-new-message {
    background-color: ${props => props.theme.colors.inputBackground};
    border-radius: 30px;

    :disabled {
      background-color: ${props => props.theme.colors.disabled};
    }
  }

  .rw-send {
    align-items: center;
    background-color: transparent;
    display: none;
    padding-left: 15px;
    padding-right: 5px;

    @media (max-width: ${mobileBreakpoint}px) {
      display: flex;
    }
  }

  .rw-conversation-container .rw-send .rw-send-icon-ready {
    fill: ${props => props.theme.colors.secondaryLight};
  }
  .rw-conversation-container .rw-send .rw-send-icon {
    fill: ${props => props.theme.colors.disabled};
  }

  .rw-avatar {
    height: 48px;
    width: 48px;
    min-width: 48px;
  }

  .rw-message {
    flex-wrap: nowrap;
    flex: 0 0 auto;
  }

  .rw-response,
  .rw-client {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    font-family: ${props => props.theme.fontFamily};
    margin-top: 4px;
    max-width: 50%;
    min-width: 1.2em;
    padding: calc(${props => props.theme.sizes.question} * 0.75);
    width: max-content;

    @media (max-width: ${mobileBreakpoint}px) {
      max-width: 100%;
      width: auto;
    }

    p,
    ul {
      font-size: ${props => props.theme.sizes.body};
    }
  }

  .rw-response {
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.body};
  }

  .rw-client {
    background-color: ${props => props.theme.colors.secondaryLight} !important;
    border-radius: 18px 18px 0 18px;
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.sizes.question};
  }

  .rw-replies {
    justify-content: center;
    overflow: visible;
  }

  .rw-conversation-container .rw-reply {
    background: ${props => props.theme.colors.backgroundLight};
    border-radius: 22px;
    border: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.sizes.buttonText};
    font-weight: 500;
    justify-content: center;
    min-height: auto;
    min-width: 6em;
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    z-index: 1000001;

    :hover {
      opacity: 0.7;
    }

    @media (max-width: ${mobileBreakpoint}px) {
      padding: 11px;
      font-size: 14px;
    }
  }

  .rw-message-text .rw-markdown {
    ul {
      list-style: disc;
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0.4em;
    }

    p {
      margin-bottom: 0.6em;
    }
  }

  .rw-group-message.rw-from-response {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;

    :last-of-type {
      flex-grow: 1;
    }
  }

  .rw-group-message.rw-from-response
    .rw-message.rw-with-avatar
    > div:not(.rw-response):not(.rw-carousel-container) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    width: 100%;

    .rw-response {
      box-sizing: content-box;
    }

    .rw-message:not(:first-child):not(:only-child).rw-with-avatar {
      flex-grow: 1;
    }
  }

  .rw-group-message.rw-from-response
    .rw-message:not(:first-child):not(:only-child).rw-with-avatar {
    margin-left: 64px;
  }

  .rw-group-message.rw-from-response .rw-message.rw-with-avatar {
    .rw-replies {
      margin: 20px 0 0px -54px;
    }
  }

  .rw-message.rw-with-avatar:last-of-type {
    flex-grow: 1;

    .rw-response {
      height: min-content;
    }
  }

  .rw-carousel-container {
    max-height: initial;
    height: max-content;
    display: inline-flex;
  }

  .rw-carousel-container .rw-carousel-card {
    display: flex;
    flex-direction: column;
    height: auto;
    flex: 1 0 auto;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .rw-carousel-container .rw-carousel-card .rw-carousel-buttons-container {
    position: initial;
    padding: 5px 0 10px;
  }

  .rw-carousel-container .rw-carousel-card .rw-carousel-card-subtitle {
    height: auto;
    flex: 1 0 auto;
    white-space: pre-wrap;
  }
`

const onSocketEvent = {
  bot_uttered: (response: Response) => {
    const isEndOfConversation = response.endOfConversation === true
    const hasQuickReplies =
      response.quick_replies !== undefined && response.quick_replies.length > 0

    toggleInputDisabled(isEndOfConversation || hasQuickReplies)
  }
}

const customMessageDelay = (message: string) => {
  if (message === 'undefined') return 0

  const delay = message.length * 5
  return clamp(delay, 500, 1500)
}

const RasaChatWidget: React.FC<Props> = ({
  className,
  initPayload,
  inputTextFieldHint,
  params,
  profileAvatar,
  socketPath,
  socketUrl,
  subtitle,
  title,
  ...rest
}) => {
  const previousChatId = sessionStorage.getItem(CHAT_ID)
  const chatId = `${socketUrl}${initPayload}`

  if (previousChatId !== chatId) {
    sessionStorage.setItem(CHAT_ID, chatId)
    sessionStorage.removeItem(CHAT_SESSION)
  }

  useLayoutEffect(
    () => () => {
      sessionStorage.removeItem(CHAT_ID)
      sessionStorage.removeItem(CHAT_SESSION)
    },
    [initPayload, socketUrl]
  )

  return (
    <WidgetContainer {...rest} className={className} key={chatId}>
      <Widget
        customMessageDelay={customMessageDelay}
        embedded
        initPayload={initPayload}
        inputTextFieldHint={inputTextFieldHint}
        onSocketEvent={onSocketEvent}
        params={params}
        profileAvatar={profileAvatar}
        socketPath={socketPath}
        socketUrl={socketUrl}
        subtitle={subtitle}
        title={title}
      />
    </WidgetContainer>
  )
}

export default RasaChatWidget
export { toggle, open, close, show, hide }
