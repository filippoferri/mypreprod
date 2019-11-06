import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron, ListGroup } from "react-bootstrap"

const ContactUsPage = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <SEO title="Contattaci" />
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Contattaci</h1>
      </Container>
    </Jumbotron>
    <section className="padding-bottom-huge padding-top-small">
      <Container className="text-center">
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <p>
              Vorresti chiedere un preventivo o prendere un appuntamento?<br/>
              Siamo lieti di rispondere.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col md="6">
            <ListGroup>
              <ListGroup.Item
                action
                href="https://getbootstrap.com"
                target="_blank"
              >
                Bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-bootstrap.github.io/"
                target="_blank"
              >
                react-bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-icons.netlify.com"
                target="_blank"
              >
                react-icons
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
                target="_blank"
              >
                gatsby-plugin-sass
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at the
              bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default ContactUsPage
