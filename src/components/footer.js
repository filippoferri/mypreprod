import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap"

import Logo from "../images/logo-v.svg"

const Footer = () => (
  <>
    <div className="antefooter">
      <Container>
        <Row className="justify-content-md-center text-center text-md-left">
          <Col xs={12} lg="4">
            <Link to={"/"}>
              <Image className="mb-4" src={Logo} alt={"Wavecode"}/>
            </Link>
          </Col>
          <Col xs={12} lg="3">

          </Col>
          <Col xs={12} lg="3">

            <ListGroup variant="flush">
              <ListGroup.Item><Link to={"/chi-siamo"}>Chi siamo</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/soluzioni"}>Soluzioni</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/prodotti"}>Prodotti</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/lavora-con-noi"}>Lavora con noi</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/contattaci"}>Contattaci</Link></ListGroup.Item>
              <ListGroup.Item> <Link to={"/informativa-privacy"}>Informativa della Privacy</Link></ListGroup.Item>
              <ListGroup.Item> <Link to={"/cookie-policy"}>Cookie Policy</Link></ListGroup.Item>
            </ListGroup>
            
          </Col>
        </Row>
      </Container>
    </div>
    <footer>
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Tutti i diritti riservati</p>
        <p>P.I. 02667760413. Capitale sociale Eur 100.000 I.V., REA PS 200133 - Piazzale Matteotti 28 61121 Pesaro
          (PU)</p>
      </Container>
    </footer>
  </>
)

export default Footer
