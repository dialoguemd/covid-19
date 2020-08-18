import React, { useCallback } from 'react'

import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

const LanguagePickerButton = styled.button`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.buttonText};
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px;
  margin: 0 16px;
  min-width: 50px;
  min-height: 40px;
  transition: background 200ms linear;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.colors.tertiaryLight};
  }
`

export const LanguagePicker: React.FC = props => {
  const { i18n } = useTranslation()

  const nextLanguage = i18n.languages[1]

  const cycleLanguage = useCallback(() => {
    i18n.changeLanguage(nextLanguage)
  }, [nextLanguage, i18n])

  if (i18n.languages.length === 1) {
    return null
  }

  return (
    <LanguagePickerButton {...props} onClick={cycleLanguage}>
      {nextLanguage}
    </LanguagePickerButton>
  )
}

export default LanguagePicker
