import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import avenirPath from '../fonts/AvenirNext-Regular.ttf'

const defaultFont = 'Avenir Next'

const fonts = `
  @font-face {
    font-family: "Avenir Next";
    src: url(${avenirPath}) format("truetype");
  }
`

const bodyStyles = `
  html,
  body {
    height:100%; 
    min-height:100%;  
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${defaultFont}, sans-serif;
  }
`

const gatsbyStyles = `
  #___gatsby, 
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${bodyStyles}
  ${gatsbyStyles}
`

export default function CssBaseline ({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      { children }
    </React.Fragment>
  )
}