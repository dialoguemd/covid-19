import React from 'react'

import styled from 'styled-components/macro'

import { ReactComponent as Logo } from 'images/dialogue-logo.svg'
import LanguagePicker from './language-picker'
import { mobileBreakpoint } from 'theme'

interface Props {
  title?: string
}

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: calc(${props => props.theme.sizes.title});
  padding: 0.75em;
  font-weight: 800;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  margin: 0;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: calc(${props => props.theme.sizes.title} * 0.75);
  }
`

const LogoContainer = styled.div`
  box-shadow: rgb(242, 241, 245) 0px 2px 10px;
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 24px 40px 24px 18px;
  border-bottom-right-radius: 100px;
  width: 200px;
  flex-basis: 0;
`

const LanguagePickerContainer = styled.div`
  width: 200px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${mobileBreakpoint}px) {
    flex-wrap: wrap;

    ${Title} {
      order: 3;
    }
    ${LanguagePickerContainer} {
      order: 2;
      flex-basis: 0;
    }
  }
`

export const Header: React.FC<Props> = ({ title, ...rest }) => (
  <HeaderContainer {...rest}>
    <LogoContainer>
      <Logo />
    </LogoContainer>

    <Title>{title}</Title>

    <LanguagePickerContainer>
      <span
        role="img"
        aria-label="Canada"
        css={`
          font-size: 36px;
        `}
      >
        🇨🇦
      </span>
      <LanguagePicker
        css={`
          margin-left: 2px;
        `}
      />
    </LanguagePickerContainer>
  </HeaderContainer>
)

export default Header
