import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "lavora-con-noi" }}>
    <SEO title="Lavora con  noi"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Lavora con noi</h1>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small padding-top-small">
      <Container className="text-center">
        <Row>
          <Col><h2>Pagina in allestimento</h2></Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default SolutionsPage
