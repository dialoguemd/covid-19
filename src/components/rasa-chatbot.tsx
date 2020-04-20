import React, { useLayoutEffect } from 'react'

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

interface Props {
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

const WrappedWidget: React.FC<Props & Record<string, any>> = ({
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
  useLayoutEffect(() => () => {
    // Clean up chat session before re-render
    sessionStorage.removeItem('chat_session')
  })

  const onSocketEvent = {
    bot_uttered: response => {
      if (
        response.quick_replies !== undefined &&
        response.quick_replies.length > 0
      ) {
        toggleInputDisabled(true)
      } else {
        toggleInputDisabled(false)
      }
    }
  }

  const customMessageDelay = message => {
    let delay = message.length * 10
    if (delay > 1500) delay = 1500
    if (delay < 500) delay = 500
    return delay
  }

  return (
    <div className={className} key={socketUrl}>
      <Widget
        customMessageDelay={customMessageDelay}
        embedded={true}
        initPayload={initPayload}
        inputTextFieldHint={inputTextFieldHint}
        onSocketEvent={onSocketEvent}
        params={params}
        profileAvatar={profileAvatar}
        socketPath={socketPath}
        socketUrl={socketUrl}
        subtitle={subtitle}
        title={title}
        {...rest}
      />
    </div>
  )
}

const RasaChatWidget = styled(WrappedWidget)`
  width: 100%;
  height: 100%;

  font-weight: 300 !important;

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

    > :first-child {
      padding-top: 12px;
    }

    > :last-child {
      padding-bottom: 12px;
    }
  }

  .rw-sender {
    background-color: ${props => props.theme.colors.background};
    height: 40px;
    padding: 10px;
  }

  .rw-new-message,
  .rw-send {
    background-color: #f1f0f0;
    border-radius: 30px;
  }

  .rw-send {
    display: none;
  }

  .rw-avatar {
    height: 48px;
    width: 48px;
  }

  .rw-message {
    flex-wrap: nowrap;
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
    color: ${props => props.theme.colors.lightText};
    font-size: ${props => props.theme.sizes.question};
  }

  .rw-replies {
    justify-content: center;
    overflow: visible;
  }

  .rw-reply {
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

    :last-of-type {
      flex-grow: 1;
    }
  }

  .rw-quickReplies-container {
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
`

export default RasaChatWidget
export { toggle, open, close, show, hide }
