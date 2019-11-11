import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">404</h1>
      </Container>
    </Jumbotron>

    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col className="text-center">

            <h2>Siamo spiacenti</h2>
            <p>La pagina che stai cercando non è disponibile. <br/>Ti invitiamo a tornare alla home page</p>
            <Link to="/" className="btn btn-primary">
              Home page
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
