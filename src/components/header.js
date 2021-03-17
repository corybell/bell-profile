import * as React from "react"
import { User, Briefcase, Feather, GitHub } from 'react-feather'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { GatsbyLink } from './Core'
import { color, breakpoints } from '../services/theme'

const Nav = styled.header`
  margin: 0;
  max-width: 960px;
  padding: 0 2rem;
`

const Title = styled.h3`
  margin: 0;
`

export const NavbarLogo = styled.div`
  a {
    color: ${color.headerBlack};
    font-size: 2.3rem;
  }
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media(max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin-bottom: 0;
  margin-top: 1rem;
  > li a {
    font-size: 1.2rem;
    color: #232323;
    padding: .5rem .2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span, 
    svg {
      display: block;
      vertical-align: middle;
    }
    @media(max-width: ${breakpoints.phone}) {
      font-size: 1rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <NavbarElement>
      <NavbarLogo>
        <Title>
          <GatsbyLink to="/">
            <span className="align-middle">{siteTitle}</span>
          </GatsbyLink>
        </Title>
      </NavbarLogo>
      <div className="main-navigation">
        <NavbarList>
          <li>
            <GatsbyLink to="/" className="lined-link" activeClassName="active">
              <User /><span>About</span>
            </GatsbyLink>
          </li> 
          <li>
            <GatsbyLink to="/projects" className="lined-link" activeClassName="active">
              <GitHub /><span>Github</span>
            </GatsbyLink>
          </li>  
          <li>
            <GatsbyLink to="/portfolio" className="lined-link" activeClassName="active">
              <Briefcase /><span>Portfolio</span>
            </GatsbyLink>
          </li>  
          <li>
            <GatsbyLink to="/blog" className="lined-link" activeClassName="active">
              <Feather /><span>Blog</span>
            </GatsbyLink>
          </li>
        </NavbarList>
      </div>
    </NavbarElement>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
