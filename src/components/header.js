import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Nav = styled.header`
  background: rebeccapurple;
  margin-bottom: 2rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
`

const Title = styled.h1`
  margin: 0;
`

export const GatsbyLink = styled(Link)`
  outline: none;
  text-decoration: none;
  color: white;
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
