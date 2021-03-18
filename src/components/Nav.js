import * as React from "react"
import { User, Briefcase, Feather, GitHub } from 'react-feather'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { GatsbyLink } from './Core'
import { color, breakpoints, spacing, maxWidth, fontSize, fontWeight } from '../services/theme'

const Root = styled.nav`
  margin: 0 auto;
  max-width: ${maxWidth.container};
  padding: 0 ${spacing[8]};
`

const NavList = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  margin: ${spacing[4]} 0 0 0;
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

const Spacer = styled.li`
  flex-grow: 1;
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

const Title = styled.h2`
  margin: 0;
  font-weight: ${fontWeight.medium};
`

const NavLink = styled(GatsbyLink)`
  display: inline-block;
  position: relative;
  color: ${color.accent};
  padding-bottom: ${spacing[3]};
  margin-left: ${spacing[8]};
  transition: all .2s ease-out;
  will-change: transform, color;
  @media(max-width: ${breakpoints.phone}) {
    margin: 0;
  }
  &:after {
    z-index: 1;
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${color.primary};
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
    -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after,
  &.active:after {
    background-color: ${color.primary};
    transform: scale(1);
    transform-origin: 0 50%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out, 
    -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
`

const Nav = ({ siteTitle }) => (
  <Root>
    <NavList>
      <TitleListItem>
        <GatsbyLink to="/">
          <Title>{siteTitle}</Title>
        </GatsbyLink>
      </TitleListItem>
      <Spacer />
      <li>
        <NavLink to="/" activeClassName="active">
          <User /><span>About</span>
        </NavLink>
      </li> 
      <li>
        <NavLink to="/projects" activeClassName="active">
          <GitHub /><span>Github</span>
        </NavLink>
      </li>  
      <li>
        <NavLink to="/portfolio" activeClassName="active">
          <Briefcase /><span>Portfolio</span>
        </NavLink>
      </li>  
      <li>
        <NavLink to="/blog" activeClassName="active">
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
  siteTitle: ``,
}

export default Nav
