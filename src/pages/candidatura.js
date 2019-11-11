import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron, Form, Button, Image } from "react-bootstrap"

var __html = require("../modules/form-script.js")
var template = { __html: __html }

const CandidatePage = () => (
  <Layout pageInfo={{ pageName: "candidatura" }}>
    <SEO title="Candidatura"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section"
           style={{ backgroundImage: `url(https://source.unsplash.com/SYTO3xs06fU/20000x1000)` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5 text-white">Candidatura</h1>
      </Container>
    </Jumbotron>
    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
              <p dangerouslySetInnerHTML={template}/>
              <h3 className="h4 mb-4">Se desideri candidarti, compila i campi sottostanti ed allega il tuo Curriculum.</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6">

            <Form id="candidacy" method="post" encType="multipart/form-data">
              <Form.Group controlId="formGroupName">
                <Form.Label>Nome</Form.Label>
                <Form.Control name="firstname" required/>
              </Form.Group>
              <Form.Group controlId="formGroupSurname">
                <Form.Label>Cognome</Form.Label>
                <Form.Control name="lastname" required/>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required/>
              </Form.Group>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control type="tel" name="phoneNumber" required/>
              </Form.Group>
              <Form.Group controlId="ControlTextarea" className="mb-5">
                <Form.Label>Presentati</Form.Label>
                <Form.Control as="textarea" rows="5" name="presentation"/>
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Allega curriculum</Form.Label>
                <Form.Control className="btn btn-primary" type="file" id="curriculum"/>
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  label={<label>Ho letto <a href='/informativa-candidati'>l'informativa della privacy</a>*.</label>}
                  name="privacy"
                  value="1"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck" className="mb-5">
                <Form.Check
                  label=" Acconsento al trattamento di categorie particolari di dati personali da parte del Titolare del trattamento da me inseriti all’interno del mio CV."
                  name="personaldata"
                  value="1"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2 justify-content-center">
                <Col lg={4}>
                  <Image id="captcha"/>
                </Col>
              </Form.Group>
              <Form.Group className="mb-4 justify-content-center">
                <Col lg={4}>
                  <Form.Control name="captchaPhrase"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col>
                  <Button className="btn btn-primary btn-lg" type="submit">Invia il messaggio</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default CandidatePage
