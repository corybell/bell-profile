import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import CssBaseline from 'components/CssBaseline'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { maxWidth, spacing } from 'services/theme'

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth.container};
  padding: ${spacing[8]};
`

const Layout = ({ children, showFooter }) => {
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
        { showFooter && <Footer siteAuthor={author} /> }
      </Container>
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  showFooter: true
}

export default Layout
