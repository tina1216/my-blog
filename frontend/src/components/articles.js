import React, {useState} from "react"
import Cards from "./card"
import Paginations from "./pagination"
import {Row, Container} from "react-bootstrap"

const Articles = ({articles}) => {
    articles = articles.reverse()
    const [currPage, setCurrPage] = useState(1);
    const [articlesPerPage] = useState(2);

    const indexOfLastArticle = currPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

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
            paginate={paginate}
            ></Paginations>
        </Container> 
    )
}

export default Articles