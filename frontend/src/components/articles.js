import React, {useState} from "react"
import Cards from "./card"
import Paginations from "./pagination"
import {Row, Container} from "react-bootstrap"

const Articles = ({articles}) => {
    const orderedArticle = articles.sort((a, b) => b.node.strapiId - a.node.strapiId)
    const [currPage, setCurrPage] = useState(1);
    const [articlesPerPage] = useState(3);

    const indexOfLastArticle = currPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currArticles = orderedArticle.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginate = (p) => setCurrPage(p);

    return (
        <Container>
            <Row>        
                {currArticles.map((article, i) => {
                    return (                       
                        <Cards article={article} key={`article__${article.node.id}`}></Cards>                      
                    )
                })}              
            </Row>
            <Paginations
            articlesPerPage={articlesPerPage}
            totalArticles={articles.length}
            paginate={paginate}>
            </Paginations>
        </Container> 
    )
}

export default Articles