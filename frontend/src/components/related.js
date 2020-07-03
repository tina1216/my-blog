import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import {Card, Col, Badge} from "react-bootstrap"

export const Related = ({rawArticle}) => (
    <StaticQuery
    query = {graphql`
        query similarArticles{
            allStrapiArticle {
                edges {
                    node {
                      strapiId
                      title
                      content
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
    
    
    render = {data => {
        const relatedArticles = data.allStrapiArticle.edges
        const shuffled = relatedArticles.sort(() => 0.5 - Math.random());
        // article = article.slice(0, 3);


    return (
            <div className="relared-container">
                {shuffled
                    .filter((article) => (article.node.strapiId !== rawArticle.strapiId))
                    .slice(0, 3)
                    .map((article, i) => {                      
                        return (                       
                            <Col sm={4} className="card-item">
                                <Link to={`/article/${article.node.strapiId}`} >
                                    <Card className="articles-cards card-design">
                                        <Card.Img 
                                        src={article.node.image.publicURL}
                                        alt={article.node.image.publicURL}
                                        variant="top"
                                        >
                                        </Card.Img>
        
                                        <Card.Body>
                                            <Badge variant="dark">
                                                {article.node.category.name}
                                            </Badge>
                                            <Card.Title>
                                                {article.node.title}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>             
                                </Link>
                            </Col>                       
                        )
                })} 
            </div> 
            )
        }}
        />
)

export default Related