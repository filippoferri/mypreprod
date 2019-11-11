import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const JavaDeveloperJuniorPage = () => (
  <Layout pageInfo={{ pageName: "java-developer-junior" }}>
    <SEO title="Java Developer Junior"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Java Developer Junior</h1>
        <p className="mb-2 mb-lg-5 text-center"><Link to="/lavora-con-noi">Lavora con Noi</Link> / Java Developer Junior</p>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small padding-top-small">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <p className="mb-2 mb-lg-5">Per il potenziamento del nostro organico, siamo alla ricerca di un profilo
              Junior Java Developer da inserire in un ambiente giovane, dinamico e motivato in cui poter crescere
              professionalmente ed esprimere le proprie attitudini.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h2 className="mb-2 mb-lg-4">Requisiti necessari</h2>
            <ul>
              <li>Diploma o Laurea in discipline informatiche</li>
              <li>Conoscenza del linguaggio di programmazione Java o altro linguaggio Object Oriented</li>
              <li>Conoscenza dei principali formati di comunicazione tra sistemi distribuiti: XML e JSON</li>
              <li>Conoscenza di base di database SQL o NoSQL</li>
              <li>Conoscenza della lingua inglese scritta e parlata</li>
              <li>Propensione al lavoro in team per il raggiungimento degli obiettivi</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h3 className="mb-2 mb-lg-4">Requisiti graditi</h3>
            <p>Rappresenterà un “plus” il possesso uno o più dei seguenti requisiti:</p>
            <ul className="mb-2 mb-lg-4">
              <li>Conoscenza delle tecnologie SpringBoot e Maven</li>
              <li>Conoscenza di PostgreSQL, MongoDB e Redis</li>
              <li>Capacità di utilizzare il sistema di versioning Git</li>
              <li>Conoscenza dei protocolli di comunicazione SOAP e REST</li>
              <li>Capacità di utilizzare sistemi e bash Linux</li>
              <li>Proattività, energia, spirito d’iniziativa, orientamento ai risultati</li>
              <li>Curiosità e passione per il mondo dell'informatica</li>
            </ul>
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

export default JavaDeveloperJuniorPage
