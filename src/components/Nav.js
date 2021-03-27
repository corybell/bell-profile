import * as React from 'react'
import { Link } from 'gatsby'
import { User, Feather, GitHub } from 'react-feather'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, breakpoints, spacing, maxWidth, fontSize, fontWeight } from 'services/theme'
import { linkAnimation } from 'services/mixin'

const Root = styled.nav`
  margin: 0 auto;
  max-width: ${maxWidth.container};
  padding: 0 ${spacing[8]};
`

const NavList = styled.ul`
  width: 100%;
  padding: 0;
  margin: ${spacing[4]} 0 0 0;
  display: flex;
  align-items: center;
  @media(max-width: ${breakpoints.phone}) {
    justify-content: space-between;
  }
  > li a {
    font-size: ${fontSize[2]};
    > svg {
      width: ${fontSize[2]};
    }
    span, 
    svg {
      display: block;
    }
    @media(max-width: ${breakpoints.phone}) {
      font-size: ${fontSize[1]};
    }
  }
`

const TitleListItem = styled.li`
  a {
    color: ${color.accent};
  }
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

const Title = styled.h2`
  margin: 0;
  font-weight: ${fontWeight.medium};
`

const Spacer = styled.li`
  flex-grow: 1;
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${color.accent};
  padding-bottom: ${spacing[3]};
  margin-left: ${spacing[8]};
  @media(max-width: ${breakpoints.phone}) {
    margin: 0;
  }
  
  ${linkAnimation}
`

const Nav = ({ siteTitle }) => (
  <Root>
    <NavList>
      <TitleListItem>
        <Link to="/">
          <Title>{siteTitle}</Title>
        </Link>
      </TitleListItem>
      <Spacer />
      <li>
        <NavLink to="/" activeClassName="active">
          <User /><span>About</span>
        </NavLink>
      </li> 
      <li>
        <NavLink to="/projects/" activeClassName="active">
          <GitHub /><span>Projects</span>
        </NavLink>
      </li>  
      <li>
        <NavLink to="/blog/" activeClassName="active">
          <Feather /><span>Blog</span>
        </NavLink>
      </li>
    </NavList>
  </Root>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: '',
}

export default Nav
