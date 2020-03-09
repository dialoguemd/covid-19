import React from 'react'

import styled from 'styled-components/macro'

const FooterContainer = styled.div`
  display: flex;
  padding: 4px;
  border-top: 1px solid ${props => props.theme.colors.primaryLight};
  background-color: ${props => props.theme.colors.backgroundLight};
`

const FooterColumn = styled.div`
  flex: 1;
`

export const Footer: React.FC = props => {
  return (
    <FooterContainer {...props}>
      <FooterColumn>
        <h3>About</h3>
      </FooterColumn>
      <FooterColumn>
        <h3>For Provincial Residents</h3>
      </FooterColumn>
      <FooterColumn>
        <h3>For Canadians</h3>
      </FooterColumn>
    </FooterContainer>
  )
}

export default Footer
