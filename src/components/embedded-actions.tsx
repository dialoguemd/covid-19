import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { BridgeContext } from 'bridge/context'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 24px 0 50px 0;
`

const CtaButton = styled.button`
  align-items: center;
  transition: background 200ms linear;
  font-size: ${props => props.theme.sizes.buttonText};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  border-radius: 28px;
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75) 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-width: 6em;
  margin: 3px;
  color: ${props => props.theme.colors.buttonText};
  text-decoration: none;
  background: ${props => props.theme.colors.primary};
  display: block;
  text-align: center;
  flex-shrink: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  outline: none;
  border-width: 0;
  &:active {
    opacity: 0.9;
  }
`

export const EmbeddedActions: React.FC<any> = ({ classes }) => {
  const { t } = useTranslation()
  const context: any = useContext(BridgeContext)

  const onClick = () => {
    const { sendText, navBack } = context.functions
    const results = classes.join(', ')
    const message = t('embedded.results', { results })
    sendText({ message })
    navBack()
  }

  return (
    <Container>
      <CtaButton onClick={onClick}>{t('embedded.done')}</CtaButton>
    </Container>
  )
}

export default EmbeddedActions
