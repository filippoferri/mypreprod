import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, ListGroup } from "react-bootstrap"
import Hero from "../images/hero.jpg"
import WhiteBoard from "../images/jpg/wavecode-whiteboard.jpg"
import Coding from "../images/jpg/wavecode-coding.jpg"

const CareerPage = () => (
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
          <Col><p>WAVECODE è sempre in crescita<br/>
            e alla ricerca di nuove figure da inserire.</p></Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6}>
            <ListGroup variant="flush">
              <ListGroup.Item><Link to={"/java-developer-senior"}>BackEnd Developer Java Senior</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/java-developer-junior"}>BackEnd Developer Java Junior</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/business-analyst"}>Business Analyst</Link></ListGroup.Item>
              <ListGroup.Item><Link to={"/web-designer"}>Web Designer</Link></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row noGutters>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(${WhiteBoard})` }}></div>
          </Col>
          <Col>
            <div className="p-lg-4 has-background-white">
              <div className="is-text-box">
                <div>
                  <h3 className="mb-4">Perchè scegliere WAVECODE per la tua carriera?</h3>
                  <p className="mb-4">Siamo un'azienda proiettata a conquistare il mondo del turismo come se fosse
                    sempre il primo giorno. Abbiamo una missione da raggiungere e per la nostra struttura in costante
                    crescita ricerchiamo sempre nuove figure da inserire.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <div className="p-2 has-background-white">
              <div className="is-text-box">
                <div>
                  <h3 className="mb-4">Cosa offriamo</h3>
                  <p className="mb-4">Lavorare in WAVECODE ti darà l'opportunità di operare in un contesto in continua
                    evoluzione e ricco di innovazione. Avrai la possibilità di accrescere la tua competenza
                    professionale nell'ambito del mercato del turismo e non solo; nel contempo potrai aggiornarti
                    costantemente sulle esigenze del mercato.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(${Coding})` }}></div>
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

export default CareerPage
