import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${props => props.theme.fontFamily}
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    font-weight: 300;
    color: ${props => props.theme.colors.text};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: opacity ease-in-out 150ms;
    :hover {
      opacity: 0.5;
    }
    :active {
      opacity: 0.75;
    }
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
