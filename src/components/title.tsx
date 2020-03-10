import styled from 'styled-components/macro'
import { mobileBreakpoint } from 'theme'

export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: calc(${props => props.theme.sizes.title});
  padding: 10px 15px;
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

export default Title
