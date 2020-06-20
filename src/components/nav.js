import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";

const Navigation = () => (
 
        <Navbar collapseOnSelect expand="xl" variant="light" bg="light"> 
           <Container expand='xl'>
            <Navbar.Brand>
                <Link to="/">Tina's Blog</Link>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="mr-auto">
                <NavDropdown title="Categories" id="nav-dropdown">
                    <StaticQuery
                    query={graphql`
                        query {
                            allStrapiCategory {
                                edges {
                                    node {
                                        strapiId
                                        name
                                    }
                                }
                            }
                        }
                    `}
                    
                    render={data =>
                    data.allStrapiCategory.edges.map((category, i) => {
                        return (
                            <NavDropdown.Item key={category.node.strapiId}>
                                <Link to={`/category/${category.node.strapiId}`}>
                                    {category.node.name}
                                </Link>
                            </NavDropdown.Item>
                        )
                    })
                    }>
                    </StaticQuery>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container> 
        </Navbar>


)

export default Navigation