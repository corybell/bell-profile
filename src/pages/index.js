import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Hero = styled.div`
  margin-bottom: 1.45rem;
  background-color: #34414D;
  padding: 1rem;
  width: 100%
`

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
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
