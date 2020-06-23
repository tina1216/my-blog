import React from "react"
import { Link } from "gatsby"
import {Card, Col, Badge} from "react-bootstrap"

const Cards = ({article}) => {
    return (
        <Col xs={12} md={4}>
        <Link to={`/article/${article.node.strapiId}`}  className="card card-design">
            <Card className="articles-cards bg-dark text-white">
                <Card.Img 
                src={article.node.image.publicURL}
                alt={article.node.image.publicURL}
                variant="top"
                class="card-img">
                </Card.Img>

                <Card.Body>
               
                    <div className="card-img-overlay text-white">
                        <Badge variant="dark">
                            {article.node.category.name}
                        </Badge>
                        <Card.Title>
                            {article.node.title}
                        </Card.Title>
                    </div>
         
                </Card.Body>
            </Card>             
        </Link>
        </Col>  
    )
}

export default Cards