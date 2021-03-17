import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Container, GatsbyLink } from './Core'

const Nav = styled.header`
  // margin-bottom: 2rem;
`

const Title = styled.h3`
  margin: 0;
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
