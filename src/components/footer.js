import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, img } from "react-bootstrap"

import Logo from "../images/logo-v.svg"

const Footer = () => (
  <>
    <div className="antefooter">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Link to={"/"}>
              <img src={Logo} alt={""} />
            </Link>
          </Col>
          <Col xs lg="3">

          </Col>
          <Col xs lg="3">
            <Link to={"/chi-siamo"}>Chi siamo</Link><br/>
            <Link to={"/soluzioni"}>Soluzioni</Link><br/>
            <Link to={"/prodotti"}>Prodotti</Link><br/>
            <Link to={"/lavora-con-noi"}>Lavora con noi</Link><br/>
            <Link to={"/contattaci"}>Contattaci</Link><br/>
            <Link to={"/informativa-privacy"}>Informativa della Privacy</Link><br/>
            <Link to={"/cookie-policy"}>Cookie Policy</Link>
          </Col>
        </Row>
      </Container>
    </div>
    <footer>
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Tutti i diritti riservati</p>
        <p>P.I. 02667760413. Capitale sociale Eur 100.000 I.V., REA PS 200133 - Piazzale Matteotti 28 61121 Pesaro (PU)</p>
      </Container>
    </footer>
  </>
)

export default Footer
