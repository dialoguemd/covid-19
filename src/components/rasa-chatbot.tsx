import React from 'react'

import { Widget, toggle, open, close, show, hide } from 'rasa-webchat'
import styled from 'styled-components/macro'

interface Props {
  title: string
  socketUrl: string
  socketPath: string
}

const WrappedWidget: React.FC<Props & Record<string, any>> = ({
  title,
  socketUrl,
  socketPath,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <Widget
        title={title}
        socketUrl={socketUrl}
        socketPath={socketPath}
        hideWhenNotConnected={false}
        {...rest}
      />
    </div>
  )
}

const RasaChatWidget = styled(WrappedWidget)`
  .rw-widget-wrapper-css {
    .rw-launcher {
      background-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .rw-conversation-container {
      .rw-header,
      .rw-client {
        /* original background-color is !important in rasa-webchat */
        background-color: ${(props) => props.theme.colors.primary} !important;
      }

      .rw-close-button,
      .rw-toggle-fullscreen-button {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`

export default RasaChatWidget
export { toggle, open, close, show, hide }
