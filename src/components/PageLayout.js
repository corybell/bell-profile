import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from './CssBaseline'
import Nav from "components/Nav"
import Footer from 'components/Footer'
import { Container } from 'components/Core'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata

  return (
    <CssBaseline>
      <Nav siteTitle={title} />
      <Container>
        <main>{children}</main>
        <Footer siteAuthor={author} />
      </Container>
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
