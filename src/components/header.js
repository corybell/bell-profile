import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Container } from './Core'

const Nav = styled.header`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  margin: 0;
`

export const GatsbyLink = styled(Link)`
  outline: none;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Container>
      <Title>
        <GatsbyLink to="/">
          {siteTitle}
        </GatsbyLink>
      </Title>
    </Container>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
