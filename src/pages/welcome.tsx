import React from 'react'

import {  Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import logo from 'images/logo.png'


const Container = styled.div`
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 1.5);
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 500;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: calc(${props => props.theme.sizes.buttonText} * 2.0);
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  h3 {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 200;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  a {
    color: ${props => props.theme.colors.botFontColor};
    font-size: calc(${props => props.theme.sizes.buttonText});
    padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
    font-weight: 800;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
  }
`

export const WelcomePage: React.FC = () => {
  return (
      <Container>
        <img src={logo} />
        <h2>COVID-19: What you need to know</h2>
        <h3>Get accurate personalized information from trusted Canadian medical sources regarding COVID-19.</h3>

        <Link to="/chat/">Get Started</Link>
      </Container>
  )
}

export default WelcomePage

