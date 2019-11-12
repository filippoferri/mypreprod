import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const SuccessPage = () => (
  <Layout>
    <SEO title="Eureka! La email è stata inviata con successo!"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Eureka!</h1>
      </Container>
    </Jumbotron>

    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col className="text-center">

            <h2 className="mb-4">La email è stata inviata con successo!</h2>
            <Link to="/" className="btn btn-primary">
              Torna in Home Page
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default SuccessPage
