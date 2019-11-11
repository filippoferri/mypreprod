import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron} from "react-bootstrap"
import Hero from "../images/hero.jpg"

const BusinessAnalystPage = () => (
  <Layout pageInfo={{ pageName: "business-analyst" }}>
    <SEO title="Business Analyst"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Business Analyst</h1>
        <p className="mb-2 mb-lg-5 text-center"><Link to="/lavora-con-noi">Lavora con Noi</Link> / Business Analyst</p>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small padding-top-small">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <p className="mb-2 mb-lg-5">Ricerchiamo un Business Analyst / analista funzionale che si occuperà delle seguenti mansioni.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h2 className="mb-2 mb-lg-4">Principali attività</h2>
            <ul>
              <li>Raccolta di requisiti e specifiche tecniche</li>
              <li>Redazione di documentazione di analisi</li>
              <li>Validazione dei requisiti e dei risultati eseguendo test di funzionalità delle soluzioni implementate dal team di sviluppo</li>
              <li>Supportare il Service Manager a livello tecnico nella gestione dell'HelpDesk aziendale</li>
              <li>Monitorare assieme al Project Manager lo sviluppo dei progetti all'interno dei team di sviluppo</li>
              <li>Garantire il corretto utilizzo dei sistemi aziendali</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h3 className="mb-2 mb-lg-4">Requisiti essenziali</h3>
            <ul className="mb-2 mb-lg-4">
              <li>Laurea triennale e/o specialistica, in Ingegneria (preferibilmente gestionale, statistica o indirizzo informatico)</li>
              <li>Ottime capacità logiche di analisi e di sintesi</li>
              <li>Buona attitudine al lavoro in gruppo</li>
              <li>Predisposizione al lavoro in team in contesti dinamici ed in continua evoluzione</li>
              <li>Capacità di gestione progetti in autonomia</li>
              <li>Resistenza allo stress</li>
              <li>Capacità di lavorare per obiettivi</li>
              <li>Conoscenza della lingua inglese parlata e scritta</li>
            </ul>
            <p>La conoscenza del gestionale AS400 e del dominio applicativo relativo al mercato del turismo costituirà un plus.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h2 className="mb-2 mb-lg-4">Funzioni lavorative</h2>
            <p>Business, Service & Development</p>
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
            <Link to="/candidatura" className="btn btn-primary ml-3">
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
            <Link to="/candidatura" className="btn btn-outline-white">
              Invia candidatura libera
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default BusinessAnalystPage
