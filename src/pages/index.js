import * as React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/PageLayout"
import SEO from "components/Seo"
import { color, spacing, fontSize, breakpoints, fontWeight } from 'services/theme'
import { FlexBox } from 'components/Core'

export const query = graphql`
  query {
    aboutJson {
      greeting
      p1
      p2
    }
  }
`

const ImageContainer = styled.div`
  height: 496px;
  min-height: 496px;
  width: 376px;
  min-width: 376px;
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
  width: max-content;
  padding: 1rem;
  text-align: center;
  display: block;
  color: #000;
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.medium};
  border: 5px solid ${color.primary};
  text-transform: uppercase;
  transition: background-color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: white;
    background-color: ${color.primary};
  }
`

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 224px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <FlexBox>
      <ImageContainer>
        <StaticImage
          src="../images/hero.png"
          alt="Hero"
          loading="eager"
        />
      </ImageContainer>
      <TextContainer>
        <h1>{data.aboutJson.greeting}</h1>
        <p>{data.aboutJson.p1}</p>
        <p>{data.aboutJson.p2}</p>
        <ButtonContainer>
          <ResumeButton href="resume.pdf" target="_blank">Download resume</ResumeButton>
        </ButtonContainer>
      </TextContainer>
    </FlexBox>
  </Layout>
)

export default IndexPage
