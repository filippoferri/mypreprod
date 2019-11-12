import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Jumbotron, Form, Button, Image } from "react-bootstrap"

var __html = require("../modules/form-script.js")
var template = { __html: __html }

const ContactUsPage = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <SEO title="Contattaci"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section"
           style={{ backgroundImage: `url(https://source.unsplash.com/5brvJbR1Pn8/20000x1000)` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Contattaci</h1>
      </Container>
    </Jumbotron>
    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
              <p dangerouslySetInnerHTML={template}/>
            <h3 className="h4 mb-4">Vorresti chiedere un preventivo<br/> o prendere un appuntamento?<br/>
              Siamo lieti di rispondere.</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6">

            <Form id="contactus" method="post" name="contactus">
              <Form.Group controlId="formGroupName">
                <Form.Label>Nome</Form.Label>
                <Form.Control name="firstname"/>
              </Form.Group>
              <Form.Group controlId="formGroupSurname">
                <Form.Label>Cognome</Form.Label>
                <Form.Control name="lastname"/>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"/>
              </Form.Group>
              <Form.Group controlId="ControlTextarea" className="mb-5">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control as="textarea" rows="5" name="message"/>
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  label={<label>Ho letto <a href='/'>l'informativa della privacy</a>*.</label>}
                  name="privacy"
                  value="1"
                />
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  label="Do il consenso al trattamento dei miei dati personali per future attività di marketing."
                  name="privacy"
                  value="1"
                />
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck" className="mb-5">
                <Form.Check
                  label="Do il consenso alla comunicazione dei miei dati personali a società terze, partner del Titolare, per future attività di marketing da parte delle stesse."
                  name="privacy"
                  value="1"
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

export default ContactUsPage
