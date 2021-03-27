import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from 'components/PageLayout'
import SEO from 'components/Helmet'
import { spacing, breakpoints } from 'services/theme'
import { flexColumnCenter, primaryButton, flexFullWidth } from 'services/mixin'
import { ButtonContainer } from 'components/Styled'

export const query = graphql`
  query {
    aboutJson {
      greeting
      p1
      p2
    }
  }
`

const FlexBox = styled.div`
  ${flexFullWidth}
`

const HeroContainer = styled.div`
  height: 496px;
  min-height: 496px;
  width: 376px;
  min-width: 376px;
  @media(max-width: ${breakpoints.phone}) {
    display: none
  }
`

const BioContainer = styled.div`
  padding-left: ${spacing[16]};
  ${flexColumnCenter}
  @media(max-width: ${breakpoints.phone}) {
    padding-left: 0;
  }
`

const ResumeButton = styled.a`
  ${primaryButton}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <FlexBox>
      <HeroContainer>
        <StaticImage
          src="../images/hero.png"
          alt="Hero"
          loading="eager"
        />
      </HeroContainer>
      <BioContainer>
        <h1>{data.aboutJson.greeting}</h1>
        <p>{data.aboutJson.p1}</p>
        <p>{data.aboutJson.p2}</p>
        <ButtonContainer>
          <ResumeButton href="resume.pdf" target="_blank">Download resume</ResumeButton>
        </ButtonContainer>
      </BioContainer>
    </FlexBox>
  </Layout>
)

export default IndexPage
