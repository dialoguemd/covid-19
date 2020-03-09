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
  margin: 8px;
  min-width: 50px;
  transition: background 200ms linear;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`

export const LanguagePicker: React.FC = props => {
  const { i18n } = useTranslation()

  const otherLanguage = i18n.languages.find(lang => lang !== i18n.language)

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(otherLanguage)
  }, [otherLanguage, i18n])

  return (
    <LanguagePickerButton {...props} onClick={toggleLanguage}>
      {otherLanguage}
    </LanguagePickerButton>
  )
}

export default LanguagePicker
