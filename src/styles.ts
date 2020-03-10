import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${props => props.theme.fontFamily}
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    font-weight: 300;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
  }
`

export default GlobalStyles
