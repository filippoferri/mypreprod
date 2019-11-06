import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container, img } from "react-bootstrap"

import Logo from "../images/wavecode-logo.svg"

const MainNavbar = ({ pageInfo, siteTitle }) => {

  return (
    <>
      <Navbar expand="lg" id="site-navbar" fixed="top">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <img
                src={Logo}
                alt={siteTitle}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/chi-siamo" className="link-no-style">
                <Nav.Link as="span" eventKey="chi-siamo">
                  Chi siamo
                </Nav.Link>
              </Link>
              <Link to="/soluzioni" className="link-no-style">
                <Nav.Link as="span" eventKey="soluzioni">
                  Soluzioni
                </Nav.Link>
              </Link>
              <Link to="/prodotti" className="link-no-style">
                <Nav.Link as="span" eventKey="prodotti">
                  Prodotti
                </Nav.Link>
              </Link>
              <Link to="/contattaci" className="btn btn-primary ml-3">
                Contattaci
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar
