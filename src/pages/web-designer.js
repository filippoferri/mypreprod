import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const WebDesignerPage = () => (
  <Layout pageInfo={{ pageName: "web-design" }}>
    <SEO title="Web Designer"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Web Designer</h1>
        <p className="mb-2 mb-lg-5 text-center"><Link to="/lavora-con-noi">Lavora con Noi</Link> / Web Designer</p>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small padding-top-small">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <p className="mb-2 mb-lg-5">Siamo alla ricerca di un profilo da inserire, come Web Designer, in un ambiente giovane, dinamico e stimolante al fine di sviluppare nuove grafiche, partendo da wireframe, apportando creatività che non impatti sulla User Exeperience dei siti siti web, web app e interfacce web in generale.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h2 className="mb-2 mb-lg-4">Requisiti tecnici di base</h2>
            <ul>
              <li>Sviluppo di progetti grafici partendo da wireframe.</li>
              <li>Realizzazione layout grafici di portali, siti web, landing page.</li>
              <li>Realizzazione grafiche per campagne di advertising, banner siti web, template newsletter, infografiche.</li>
              <li>Realizzazione loghi.</li>
              <li>Supporto grafico alla brand identity.</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h3 className="mb-2 mb-lg-4">Soft Skills</h3>
            <ul className="mb-2 mb-lg-4">
              <li>Propensione al lavoro in team.</li>
              <li>Conoscenza principi di UX.</li>
              <li>Conoscenza completa suite Adobe.</li>
              <li>Ottimo time management personale.</li>
              <li>Resistenza allo stress.</li>
              <li>Capacità di lavorare per obiettivi.</li>
            </ul>
            <p>La conoscenza dei linguaggi HTML5, CSS3 e JavaScript costituirà un plus.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-5">
            <h2 className="mb-2 mb-lg-4">Sede di lavoro</h2>
            <p>Pesaro</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-5 text-center">
            <Link to="/" className="btn btn-primary ml-3">
              Candidati ora
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="has-background-primary padding-bottom-small padding-top-small">
      <Container>
        <Row>
          <Col><h3 className="h2 text-white">Il tuo profilo non corrisponde?</h3></Col>
          <Col className="text-right">
            <Link to="/" className="btn btn-outline-white">
              Invia candidatura libera
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default WebDesignerPage
