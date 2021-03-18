import * as React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing, fontSize, color, fontWeight, breakpoints } from '../services/theme'
import { GatsbyLink } from '../components/Core'
// <a href="https://www.gatsbyjs.com">Gatsby</a>

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  @media(max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }
`

const projects = [
  { text: 'Github', url: 'https://github.com/corybell' },
  { text: 'NPM', url: 'https://www.npmjs.com/~bellistic' },
  { text: 'Linkedin', url: 'https://www.linkedin.com/in/corybell/' },
  { text: 'Stackshare', url: 'https://stackshare.io/corybell' },
]

const Root = styled.footer`
  margin: ${spacing[32]} 0;
`

const Copyright = styled.small`
  display: block;
  margin-top: ${spacing[8]};
  font-size: ${fontSize[0]};
`

const LeftContainer = styled.div`
  width: 400px;
  min-width: 400px;
  padding: 0;
  @media(max-width: ${breakpoints.phone}) {
    width: 100%;
    min-width: 0;
  }
`

const ProjectLink = styled.a`
  display: inline-block;
  position: relative;
  width: min-content;
  color: ${color.accent};
  padding-bottom: ${spacing[3]};
  margin-bottom: ${spacing[8]};
  transition: all .2s ease-out;
  will-change: transform, color;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: ${breakpoints.phone}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Hero = styled.h1`
  font-size: ${fontSize[7]};
`

const ContactButton = styled(GatsbyLink)`
  width: 12rem;
  height: 4rem;
  color: #000;
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.medium};
  letter-spacing: 2px;
  border: 5px solid ${color.primary};
  display: block;
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: white;
    background-color: ${color.primary};
  }
`

const Footer = ({ siteAuthor }) => (
  <Root>
    <FlexBox>
      <LeftContainer>
        <TextContainer>
          { projects.map(p => <ProjectLink href={p.url} target="_blank">{p.text}</ProjectLink> )}
        </TextContainer>
      </LeftContainer>
      <div>
        <p><Hero>Like what you see? Let's get in touch.</Hero></p>
        <ContactButton to="/contact">Contact me</ContactButton>
      </div>
    </FlexBox>
    <Copyright>
      © {new Date().getFullYear()} {siteAuthor}
    </Copyright>
  </Root>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
}

export default Footer
