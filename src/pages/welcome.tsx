import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import { theme } from 'theme'
import logo from 'images/logo.png'

const localTheme = ({ colors, sizes, fontFamily }: typeof theme) => ({
  background: colors.background,
  headerBgColor: colors.primary,
  headerFontColor: colors.backgroundLight,
  headerFontSize: sizes.question,
  botBubbleColor: colors.backgroundLight,
  botFontColor: colors.text,
  userBubbleColor: colors.secondaryLight,
  userFontColor: colors.backgroundLight,
  fontFamily,
  colors,
  sizes
})

const Wrapper = styled('div')`
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 1.5);
    font-family: ${props => props.theme.fontFamily};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 500;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 2.0);
    font-family: ${props => props.theme.fontFamily};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h3 {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    font-family: ${props => props.theme.fontFamily};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 200;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  a {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    font-family: ${props => props.theme.fontFamily};
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const WelcomePage: React.FC = () => {
  return (
    <ThemeProvider theme={localTheme}>
      <Wrapper>
        <img src={logo} />
        <h2>COVID-19: What you need to know</h2>
        <h3>Get accurate personalized information from trusted Canadian medical sources regarding COVID-19.</h3>

        <a href="/">Get Started</a>
      </Wrapper>
  </ThemeProvider>
  )
}

export default WelcomePage

