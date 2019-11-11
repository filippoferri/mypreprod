import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron } from "react-bootstrap"
import Hero from "../images/hero.jpg"

const JavaDeveloperSeniorPage = () => (
  <Layout pageInfo={{ pageName: "java-developer-senior" }}>
    <SEO title="Java Developer Senior"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Java Developer Senior</h1>
        <p className="mb-2 mb-lg-5 text-center"><Link to="/lavora-con-noi">Lavora con Noi</Link> / Java Developer Senior</p>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small padding-top-small">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <p className="mb-2 mb-lg-5">Siamo alla ricerca di un profilo da inserire, come Java Senior Developer, in un
              ambiente giovane,
              dinamico e stimolante al fine di progettare e sviluppare nuovi prodotti e migliorare l'affidabilità e le
              performance dei prodotti già esistenti.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h2 className="mb-2 mb-lg-4">Requisiti tecnici di base</h2>
            <ul>
              <li>Almeno 5 anni di esperienza lavorativa di cui almeno 3 nel ruolo di Java Developer.</li>
              <li>Conoscenza e padronanza delle seguenti tecnologie: Java Enterprise Edition (Java 8), SpringBoot,
                Maven.
              </li>
              <li>Conoscenza di database SQL e NoSQL, in particolar modo PostgreSQL, MongoDB e Redis.</li>
              <li>Conoscenza dei principali formati di comunicazione tra sistemi distribuiti: XML e JSON.</li>
              <li>Capacità di utilizzare il sistema di versioning Git in autonomia.</li>
              <li>Familiarità con protocolli di comunicazione SOAP e REST.</li>
              <li>Propensione alla stesura di test ed alla scrittura di codice testabile.</li>
              <li>Conoscenza della lingua inglese scritta e parlata.</li>
              <li>Conoscenza di sistemi Linux e capacità di utilizzo della Bash.</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h3 className="mb-2 mb-lg-4">Soft Skills</h3>
            <ul className="mb-2 mb-lg-4">
              <li>Propensione al lavoro in team.</li>
              <li>Capacità di "problem solving"</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-2 mb-lg-4">
            <h3 className="mb-2 mb-lg-4">Requisiti aggiuntivi</h3>
            <p>Rappresenterà un “plus” il possesso uno o più dei seguenti requisiti:</p>
            <ul className="mb-2 mb-lg-4">
              <li>Laurea in Ingegneria Informatica, Informatica, Scienze dell'Informazione e/o equivalenti.</li>
              <li>Conoscenza di OSGI e capacità di utilizzo dell'ESB JBoss Fuse di RedHat.</li>
              <li>Conoscenza del framework Apache Camel e dei principali EIP.</li>
              <li>Conoscenza e familiarità con Microservices e sistemi distribuiti.</li>
              <li>Conoscenza di Docker.</li>
              <li>Conoscenza e propensione a CI/CD.</li>
              <li>Conoscenza una o più delle seguenti tecnologie: SpringCloud/Kubernetes/Google Cloud Platform.</li>
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

export default JavaDeveloperSeniorPage
