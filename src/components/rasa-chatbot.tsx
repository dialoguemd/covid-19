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
  title: string
  subtitle: string
  profileAvatar: string
  socketUrl: string
  socketPath: string
  inputTextFieldHint: string
}

const WrappedWidget: React.FC<Props & Record<string, any>> = ({
  title,
  subtitle,
  profileAvatar,
  socketUrl,
  socketPath,
  className,
  inputTextFieldHint,
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

  return (
    <div className={className}>
      <Widget
        title={title}
        subtitle={subtitle}
        socketUrl={socketUrl}
        socketPath={socketPath}
        hideWhenNotConnected={false}
        profileAvatar={profileAvatar}
        onSocketEvent={onSocketEvent}
        inputTextFieldHint={inputTextFieldHint}
        {...rest}
      />
    </div>
  )
}

const RasaChatWidget = styled(WrappedWidget)`
  .rw-widget-wrapper-css {
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
  }
`

export default RasaChatWidget
export { toggle, open, close, show, hide }
