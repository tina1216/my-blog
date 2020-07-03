import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"
import {Container, Button} from "react-bootstrap"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Related from "../components/related"

//image {publicURL}
export const query = graphql`
    query ArticleQuery($id: Int!) {
        strapiArticle(strapiId: {eq: $id}) {
            strapiId
            title
            content
            published_at
            image {
                publicURL
                childImageSharp {
                    fluid(maxWidth: 1366, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
        }
    }
`

const Article = ({data}) => {
    const article = data.strapiArticle

    return (
        <Layout>
            <Container className="article-container" fluid="sm">
                
                <div className="article-title-items">
                    <h1 class="article-title">{article.title}</h1>
                </div>
                <div className="article-date">
                    <p>
                        <Moment format="MMM Do YYY">{article.published_at}</Moment>
                    </p>
                </div>

                <picture>
                    <Img fluid={article.image.childImageSharp.fluid}/>
                </picture>
                
                <div className="article-content">      
                    <ReactMarkdown source={article.content}
                    renderers = {{
                        image: ({src, alt}) => {
                            return <Img fluid={article.image.childImageSharp.fluid} alt={alt}/>
                        }
                    }} />
                </div>

                <div className="article-border"></div>

                <Related rawArticle={article}></Related>

                <Link to="/">
                    <Button className="article-btn" variant="outline-dark" size="lg" block>BACK</Button>
                </Link>
                

            </Container>
            
        </Layout>
    )
}

export default Article