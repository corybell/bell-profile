import * as React from "react"
import styled from 'styled-components'
import Layout from "components/PageLayout"
import SEO from "components/Helmet"
import { graphql } from 'gatsby'
import { color, breakpoints, fontSize } from 'services/theme'

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
        }
      }
    }
  }
`

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 2rem;
  @media(max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }
`

const RepoCard = styled.a`
  min-height: 120px;
  width: 100%;
  display: block;
  position: relative;
  border: 2px solid ${color.primary};
  padding: 1rem;
  transition: all 200ms ease-in-out;
  h6 {
    margin: 0;
  }
  &:hover {
    box-shadow: 0px 0px 20px 0px rgb(0, 0, 0, 0.2);
    h6 {
      color: ${color.primary};
    }
  }
`

const RepoDescription = styled.span`
  margin-top: 0.5rem;
  font-size: ${fontSize[0]};
  display: block;
  color: black;
`

const RepoLanguage = styled.div`
  position: absolute;
  bottom: 1rem;
  color: black;
`

const Circle = styled.span`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 0.5rem;
`

const ProjectsPage = ({ data }) => {
  const repos = data.allGithubData.edges[0].node.data.viewer.repositories.nodes
  
  const renderRepo = (r) => {
    const language = r.languages.edges[0].node
    return (
      <RepoCard key={r.name} href={r.url} target="_blank" rel="noreferrer">
        <h6>{r.name}</h6>
        <RepoDescription>{r.description}</RepoDescription>
        <RepoLanguage>
          <Circle color={language.color} />
          <span>{language.name}</span>
        </RepoLanguage>
      </RepoCard>
    )
  }

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
