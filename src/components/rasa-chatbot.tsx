import React from 'react'

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

interface Props {
  initPayload: string
  inputTextFieldHint: string
  profileAvatar: string
  socketPath: string
  socketUrl: string
  storage: 'local' | 'session'
  subtitle: string
  title: string
}

const WrappedWidget: React.FC<Props & Record<string, any>> = ({
  className,
  initPayload,
  inputTextFieldHint,
  profileAvatar,
  socketPath,
  socketUrl,
  storage,
  subtitle,
  title,
  ...rest
}) => {
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
    <div className={className}>
      <Widget
        customMessageDelay={customMessageDelay}
        hideWhenNotConnected={false}
        initPayload={initPayload}
        inputTextFieldHint={inputTextFieldHint}
        onSocketEvent={onSocketEvent}
        profileAvatar={profileAvatar}
        socketPath={socketPath}
        socketUrl={socketUrl}
        storage={storage}
        subtitle={subtitle}
        title={title}
        {...rest}
      />
    </div>
  )
}

const RasaChatWidget = styled(WrappedWidget)`
  .rw-launcher {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .rw-conversation-container {
    .rw-header,
    .rw-client {
      /* original background-color is !important in rasa-webchat */
      background-color: ${props => props.theme.colors.primary} !important;
    }

    .rw-close-button,
    .rw-toggle-fullscreen-button {
      background-color: ${props => props.theme.colors.primary};
    }

    .rw-sender,
    .rw-new-message,
    .rw-send,
    .rw-response {
      background-color: #f1f0f0;
    }

    .rw-send {
      display: none;
    }

    .rw-message {
      flex-wrap: nowrap;
    }

    .rw-replies {
      justify-content: center;
    }
  }
`

export default RasaChatWidget
export { toggle, open, close, show, hide }
