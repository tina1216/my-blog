import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";

const MainNav = () => (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" sticky="top"> 
           <Container expand='xl'>
            <Navbar.Brand>
                <Link to="/">Tina's Blog</Link>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="mr-auto">
                <NavDropdown title="Category" id="nav-dropdown" className="txt-basic">
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

export default MainNav