
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GITHUB_API_TOKEN } = process.env

const gqlQuery = `
  query { 
    viewer { 
      repositories(last: 100, privacy: PUBLIC) {
        nodes {
          name
          url
          description
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

module.exports = {
  siteMetadata: {
    title: `Cory Bell`,
    description: `Bell Code Portfolio`,
    author: `Bell Code`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/about`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        // url: someUrl,
        // token: required by the GitHub API
        token: GITHUB_API_TOKEN,
        // GraphQLquery: defaults to a search query
        graphQLQuery: gqlQuery,
      }
    }
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
