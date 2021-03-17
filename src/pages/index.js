import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/PageLayout"
import SEO from "../components/Seo"
import { color, spacing } from '../services/theme'

const Hero = styled.div`
  margin-bottom: ${spacing[6]};
  background-color: ${color.accent};
  padding: ${spacing[20]};
  width: 100%
`

const desc = `I'm a full-stack developer located in St. Paul, Minnesota offering web development consulting
  and freelance services. Check out my Github projects for code samples or download my resume below for a 
  full client list.`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <StaticImage
        src="../images/hero.svg"
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </Hero>
      
    <h1>Hi people</h1>
    <p>{desc}</p>
  </Layout>
)

export default IndexPage
