import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import { overrides } from 'services/overrides'

import LogoImage from 'images/dialogue-logo.svg'
import LanguagePicker from './language-picker'
import Title from './title'
import RegionPicker from 'components/region-picker'
import { mobileBreakpoint } from 'theme'
import { config } from 'services/config'

const isLocalhost = window.location.hostname === 'localhost'
const ENABLE_REGION_SWITCHING = isLocalhost || config.ENABLE_REGION_SWITCHING
const { ENABLE_LOGO } = config

interface Props extends LogoContainerProps {
  title?: string
  showRegionPicker?: Boolean
}
interface LogoContainerProps {
  hideLogoBackground?: Boolean
}

const LogoContainer = styled.div<LogoContainerProps>`
  position: absolute;
  z-index: 1000002;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 24px 42px 21px 18px;
  border-bottom-right-radius: 100px;
  flex-basis: 0;

  ${({ hideLogoBackground }) =>
    hideLogoBackground &&
    `
      background-color: transparent;
      border-bottom-right-radius: 0;
      padding: 15px 42px 21px 18px;
    `}

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 12px 32px 8px 12px;
  }

  img {
    height: 32px;
  }
`

const LanguagePickerContainer = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin: 10px;
  min-height: 60px;
`

export const Header: React.FC<Props> = ({
  showRegionPicker,
  hideLogoBackground,
  title,
  ...rest
}) => (
  <>
    {ENABLE_LOGO && (
      <LogoContainer hideLogoBackground={hideLogoBackground}>
        <Link to="/">
          <img alt="logo" src={overrides.images.logo || LogoImage} />
        </Link>
      </LogoContainer>
    )}
    <HeaderContainer {...rest}>
      <div></div>
      {title && <Title>{title}</Title>}
      <LanguagePickerContainer>
        <LanguagePicker
          css={`
            margin-left: 2px;
          `}
        />
        {ENABLE_REGION_SWITCHING && showRegionPicker && <RegionPicker />}
      </LanguagePickerContainer>
    </HeaderContainer>
  </>
)

export default Header
