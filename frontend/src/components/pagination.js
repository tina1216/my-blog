import React from "react"
import {Pagination} from "react-bootstrap";

const Paginations = ({articlesPerPage, totalArticles, paginate}) => {
    const pageNum = [];

    for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNum.push(i);
    }

    return (
        <Pagination>
            {pageNum.map(num => (
                <Pagination.Item 
                key={num}
                onClick={() => paginate(num)}>
                {num}
                </Pagination.Item>                
            ))
            }
        </Pagination>
    )
}

export default Paginations