import React from "react"
import Cards from "./card"
import {Row, Container} from "react-bootstrap"

const Articles = ({articles}) => {
    const firstArticles = articles[articles.length - 1] 
    // const firstArticlesCount = Math.ceil(articles.length / 5)
    // const firstArticles = articles.slice(0, firstArticlesCount)
    const rightArticles = articles.slice(firstArticles, articles.length)

    return (
        <Container>
            <Row>
                           
                {/* {firstArticles.map((article, i) => {
                    return (
                        <Card article={article} key={`article__${article.node.id}`}></Card>
                    )
                })} */}
            
                {rightArticles.map((article, i) => {
                    return (                       
                        <Cards article={article} key={`article__${article.node.id}`}></Cards>                      
                    )
                })}
              
            </Row>
        </Container> 
    )
}

export default Articles