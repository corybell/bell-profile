import * as React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing, fontSize } from '../services/theme'

const Root = styled.footer`
  margin-top: ${spacing[8]};
`

const Copyright = styled.small`
  font-size: ${fontSize[0]}
`

// <a href="https://www.gatsbyjs.com">Gatsby</a>

const Footer = ({ siteAuthor }) => (
  <Root>
    <Copyright>
      © {new Date().getFullYear()} {siteAuthor}
    </Copyright>
  </Root>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
}

export default Footer
