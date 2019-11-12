import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const ErrorPage = () => (
  <Layout>
    <SEO title="Attenzione! Si è verificato un errore!"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Attenzione!</h1>
      </Container>
    </Jumbotron>

    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col className="text-center">

            <h2 className="mb-4">Si è verificato un errore!</h2>
            <p className="mb-4">Ti preghiamo di riprovare</p>
            <Link to="/contatti" className="btn btn-primary">
              Torna alla pagina contatti
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default ErrorPage
