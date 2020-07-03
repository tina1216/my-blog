import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {Container} from "react-bootstrap"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                published_at
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Container>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </Container>
        </>
      )}
    />
  </Layout>
)

export default IndexPage