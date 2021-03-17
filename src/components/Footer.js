import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
import styled from 'styled-components'
import { spacing } from '../services/theme'

const Root = styled.footer`
  margin-top: ${spacing[8]};
`

const Footer = () => (
  <Root>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </Root>
)

// Footer.propTypes = {
// }

export default Footer
