import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ButtonContainer } from 'components/Styled'
import { spacing, color, breakpoints } from 'services/theme'
import { linkAnimation, flexColumnCenter, flexFullWidth, primaryButton } from 'services/mixin'

const projects = [
  { text: 'Github', url: 'https://github.com/corybell' },
  { text: 'NPM', url: 'https://www.npmjs.com/~bellistic' },
  { text: 'Linkedin', url: 'https://www.linkedin.com/in/corybell/' },
  { text: 'Stackshare', url: 'https://stackshare.io/corybell' },
]

const Root = styled.footer`
  margin: ${spacing[32]} 0 ${spacing[2]} 0;
  padding: 0;
`

const FlexBox = styled.div`
  ${flexFullWidth}
  @media(max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  width: 376px;
  min-width: 376px;
  padding: 0;
  @media(max-width: ${breakpoints.phone}) {
    width: 100%;
    min-width: 0;
  }
`

const RightContainer = styled.div`
  padding-left: ${spacing[16]};  
  @media(max-width: ${breakpoints.phone}) {
    padding-left: 0;
  }
`

const ProjectLink = styled.a`
  display: inline-block;
  position: relative;
  width: min-content;
  color: ${color.accent};
  padding-bottom: ${spacing[3]};
  margin-bottom: ${spacing[8]};
  ${linkAnimation}
`

const ProjectsHeader = styled.h6`
  margin-bottom: ${spacing[6]};
`

const ProjectsContainer = styled.div`
  ${flexColumnCenter}
  @media(max-width: ${breakpoints.phone}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContactButton = styled(Link)`
  ${primaryButton}
`

const Motto = styled.small`
  display: block;
  margin-top: ${spacing[16]};
  text-align: right;
  font-style: italic;
`

const Copyright = styled.small`
  display: block;
  margin-top: ${spacing[4]};
  text-align: right;
`

const Footer = ({ siteAuthor }) => (
  <Root>
    <FlexBox>
      <LeftContainer>
        <ProjectsHeader>Find me here:</ProjectsHeader>
        <ProjectsContainer>
          { projects.map(p => <ProjectLink key={p.url} href={p.url} target="_blank">{p.text}</ProjectLink> )}
        </ProjectsContainer>
      </LeftContainer>
      <RightContainer>
        <h1>Like what you see? Get in touch.</h1>
        <ButtonContainer>
          <ContactButton to="/contact/">Contact me</ContactButton>
        </ButtonContainer>
      </RightContainer>
    </FlexBox>
    <Motto>
      {`Any organization will produce a design whose structure mirrors the organization's communication structure.`}
    </Motto>
    <Copyright>
      © {new Date().getFullYear()} {siteAuthor}
    </Copyright>
  </Root>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
}

export default Footer
