import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap"

import Logo from "../images/wavecode-logo.svg"

const MainNavbar = ({ pageInfo, siteTitle }) => {

  return (
    <>
      <Navbar expand="lg" id="site-navbar" fixed="top">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <Image
                src={Logo}
                alt={siteTitle}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav className="ml-auto mt-4 mt-lg-0" activeKey={pageInfo && pageInfo.pageName}>
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
                <NavDropdown as="span" title="Prodotti" id="basic-nav-dropdown">
                  <NavDropdown.Item eventKey="utiliqo-to" href="/utiliqo-to">Utiliqo TO</NavDropdown.Item>
                  <NavDropdown.Item eventKey="utiliqo-adv" href="/utiliqo-adv">Utiliqo ADV</NavDropdown.Item>
                </NavDropdown>
              <Link to="/contattaci" className="btn btn-primary ml-lg-3 mt-4 mt-lg-0 mb-4 mb-lg-0">
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
