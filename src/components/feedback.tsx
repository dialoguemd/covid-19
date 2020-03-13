import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ImageThumbsUp } from 'images/thumb-up.svg'
import { ReactComponent as ImageThumbsDown } from 'images/thumb-down.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
`

const Button = styled.button<{
  visible: Boolean
  submitted: Boolean
}>`
  border: none;
  background: transparent;
  outline: none;
  padding: 3px;
  margin: 0px;
  transition: all ease-in-out 0.3s;
  opacity: ${props => (props.visible ? '1' : '0')};
  margin-left: ${props => (props.visible ? '0' : '-32px')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  svg {
    fill: ${props =>
      props.submitted ? props.theme.colors.primary : props.theme.colors.text};
    opacity: 0.25;
    transition: opacity ease-in-out 0.3s, fill ease-in-out 0.3s 0.3s;
    width: 24px;
    height: 24px;
  }

  ${props =>
    !props.disabled &&
    `
    svg:hover {
      opacity: 0.85;
    }
    svg:active {
      opacity: 1;
    }
  `};
`

export const Feedback: React.FC<any> = ({ id }) => {
  const [submitted, setSubmitted] = useState(null)

  const track = eventType =>
    analytics.track(eventType, { id }, { context: { ip: '0.0.0.0' } })

  const trackThumbsUp = () => {
    track('thumbs_up')
    setSubmitted('thumbs_up')
  }

  const trackThumbsDown = () => {
    track('thumbs_down')
    setSubmitted('thumbs_down')
  }

  return (
    <Container>
      <Button
        submitted={submitted}
        visible={submitted !== 'thumbs_down'}
        disabled={!!submitted}
        onClick={trackThumbsUp}
      >
        <ImageThumbsUp />
      </Button>
      <Button
        submitted={submitted}
        visible={submitted !== 'thumbs_up'}
        disabled={!!submitted}
        onClick={trackThumbsDown}
      >
        <ImageThumbsDown />
      </Button>
    </Container>
  )
}

export default Feedback
