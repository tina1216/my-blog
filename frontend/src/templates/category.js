import React from "react"
import {graphql} from "gatsby"
import {Container} from "react-bootstrap"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"


export const query = graphql`
    query Category($id: Int!) {
        articles: allStrapiArticle( filter: { category: {id: {eq: $id} } }) {
            edges {
                node {
                    strapiId
                    title
                    category {
                        name
                    }
                    image {
                        publicURL
                    }

                }
            }
        }
        category: strapiCategory(strapiId: { eq: $id} ) {
            name
        }
    }
`

const Category = ({data}) => {
    const articles = data.articles.edges
    const category = data.category.name

    return (
        <Layout>
            <Container>
                <h1>{category}</h1>
                <ArticlesComponent articles={articles}></ArticlesComponent>
            </Container>
        </Layout>
    )
}

export default Category