import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/PageLayout'
import Helmet from 'components/Helmet'
import { spacing, color, fontSize } from 'services/theme'

const Article = styled.article`
  margin-bottom: ${spacing[8]};
  margin-top: ${spacing[8]};

  p {
    margin-bottom: ${spacing[0]};
  }

  h2 {
    font-size: ${fontSize[4]};
    color: ${color.primary};
    margin-bottom: ${spacing[2]} ;
    margin-top: ${spacing[0]};
  }

  header {
    margin-bottom: ${spacing[4]};
  }
`

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Helmet title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet title="All posts" />
      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Article
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </Article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
