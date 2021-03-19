import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/PageLayout"
import SEO from "../components/Seo"
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    allGithubData {
      edges {
        node {
          data {
            viewer {
              repositories {
                nodes {
                  name
                  url
                  description
                  languages {
                    edges {
                      node {
                        name
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
        }
      }
    }
  }
`

const RepoGrid = styled.div`
  display: flex;
`

const RepoCard = styled.div`
  width: 50%;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`

const TextBlock = styled.div`
  margin-top: 1rem;
`

const ProjectsPage = ({ data }) => {
  const repos = data.allGithubData.edges[0].node.data.viewer.repositories.nodes
  
  const renderRepo = (r) => (
    <RepoCard key={r.name}>
      <a href={r.url} target="_blank"><h6>{r.name}</h6></a>
      <TextBlock>
        <span>{r.description}</span>
      </TextBlock>
      <TextBlock>
        <span>{r.languages.edges[0].node.name}</span>
      </TextBlock>
    </RepoCard>
  )

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Github Repositories</h1>
      <RepoGrid>
        { repos.map(r => renderRepo(r)) }
      </RepoGrid>
    </Layout>
  )
}

export default ProjectsPage
