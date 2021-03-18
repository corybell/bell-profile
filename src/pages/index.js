import * as React from "react"
import styled from 'styled-components'
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/PageLayout"
import SEO from "../components/Seo"
import { color, spacing, fontSize, breakpoints, fontWeight } from '../services/theme'
import { FlexBox } from '../components/Core'

const ImageContainer = styled.div`
  height: 480px;
  min-height: 496px;
  min-width: 376px;
  width: 400px;
  background-color: ${color.accent};
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

const TextContainer = styled.div`
  padding-left: ${spacing[16]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: ${breakpoints.phone}) {
    padding-left: 0;
  }
`

const ResumeButton = styled.a`
  color: #000;
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.black};
  letter-spacing: 2px;
  border: 5px solid ${color.primary};
  display: block;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: white;
    background-color: ${color.primary};
  }
`

const greeting = 'Hi people'

const p1 = `I'm a full-stack developer located in St. Paul, Minnesota offering web development consulting and freelance services.`

const p2 = `Check out my Github projects for code samples or download my resume for a full client list.`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FlexBox>
      <ImageContainer>
        {/* <StaticImage
          src="../images/hero.svg"
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Hero"
        /> */}
      </ImageContainer>
      <TextContainer>
        <p><h1>{greeting}</h1></p>
        <p>{p1}</p>
        <p>{p2}</p>
        <ResumeButton href="resume.pdf" target="_blank">Download resume</ResumeButton>
      </TextContainer>
    </FlexBox>
  </Layout>
)

export default IndexPage
