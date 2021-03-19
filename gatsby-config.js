
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
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
        token: '62054aa0a15e5403826e57db1a725bc9703cdef7',
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
