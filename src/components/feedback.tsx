import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ImageThumbsUp } from 'images/thumb-up.svg'
import { ReactComponent as ImageThumbsDown } from 'images/thumb-down.svg'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
`

const Label = styled.div<{
  visible: Boolean
}>`
  font-size: 12px;
  transition: all ease-in-out 1s;
  opacity: ${props => (props.visible ? '0.5' : '0')};
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

export const Feedback: React.FC<{
  id: String
}> = ({ id }) => {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(null)

  const trackThumbsUp = () => {
    setSubmitted('thumbs_up')
  }

  const trackThumbsDown = () => {
    setSubmitted('thumbs_down')
  }

  return (
    <Container>
      <Label visible={!submitted}>{t('resultsPage.feedbackLabel')}</Label>
      <ButtonContainer>
        <Button
          submitted={submitted}
          visible={submitted !== 'thumbs_down'}
          disabled={!!submitted}
        >
          <ImageThumbsUp />
        </Button>
        <Button
          submitted={submitted}
          visible={submitted !== 'thumbs_up'}
          disabled={!!submitted}
        >
          <ImageThumbsDown />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Feedback
