import React, { HTMLAttributes } from 'react'

import styled from 'styled-components/macro'

const FooterContainer = styled.div`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.secondaryLight};
  padding: 16px;
`

export const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <FooterContainer {...props}>
      This app is for information purposes only and does not constitute a
      medical assessment. The research and data on COVID-19 continues to grow
      and evolve on an hourly basis which means that this information may be
      quickly outdated. Consulting this website is not a substitute for
      consulting your provincial/territorial public health department.
    </FooterContainer>
  )
}

export default Footer
