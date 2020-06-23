import React from "react"
import { Link } from "gatsby"
import {Card, Col, Badge} from "react-bootstrap"

const Cards = ({article}) => {
    return (
        <Col sm={4} xs={6} md={3} className="card-item">
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
}

export default Cards