import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/PageLayout'
import Helmet from 'components/Helmet'
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
  height: 122px;
  width: 100%;
  position: relative;
  display: block;
  border: 4px solid ${color.primary};
  background: #fff;
  padding: 1rem;
  h6 {
    margin: 0;
  }
  &::after {
    height:118px;
    width: 100%;
    position: absolute;
    background-color: ${color.primary};
    top: 0px;
    left: 0px;
    z-index: -1;
    content: '';
    transition: all 0.5s;
  }
  &:hover:after {
    top: 10px;
    left: 14px;
  }
`

const RepoDescription = styled.span`
  margin-top: 0.5rem;
  font-size: ${fontSize[0]};
  display: block;
  color: #000;
`

const RepoLanguage = styled.div`
  position: absolute;
  bottom: 1rem;
  color: #000;
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
      <Helmet title="Projects" />
      <h1>Github Repositories</h1>
      <RepoGrid>
        { repos.map(r => renderRepo(r)) }
      </RepoGrid>
    </Layout>
  )
}

export default ProjectsPage
