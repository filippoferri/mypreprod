import React from "react"
import { Link } from "gatsby"

import { IoIosQuote } from "react-icons/io"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image, img } from "react-bootstrap"
import Hero from "../images/hero.jpg"
import Teamwork from "../images/teamwork.svg"
import Laptop from "../images/laptop.svg"
import Chat from "../images/chat.svg"
import Solutions from "../images/worldwide.svg"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "soluzioni" }}>
    <SEO title="Soluzioni per il travel"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Soluzioni</h1>
      </Container>
    </Jumbotron>
    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">Semplifica il tuo lavoro con soluzioni ad hoc</h2>
            <p className="mb-4">La nostra esperienza a stretto contatto con le necessita e le esigenze del Business.</p>
            <blockquote>
              <IoIosQuote size={40}/>
              Together let us desire, conceive, and create the new structure of the future, which will embrace
              architecture and sculpture and painting in one unity and which will one day rise toward Heaven from the
              hands of a million workers like the crystal symbol of a new faith.
              <cite>Paolo Bianchi - <span>Project Manager</span></cite>
            </blockquote>
          </Col>
          <Col>
            <div>
              <Image className="mb-4" src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="title" fluid/>
              <h3 className="h5 mb-3">La nostra esperienza a stretto contatto con le necessità e esigenze degli agenti
                di viaggio</h3>
            </div>
            <div className="d-flex">
              <div className="mr-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
              <div className="ml-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">Semplifica il tuo lavoro con soluzioni ad hoc</h2>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link to="/" className="btn btn-primary">
              Scopri
            </Link>
          </Col>
          <Col>
            <div>
              <h3 className="h5 mb-3">La nostra esperienza a stretto contatto con le necessità e esigenze degli agenti
                di viaggio</h3>
            </div>
            <div className="d-flex">
              <div className="mr-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
              <div className="ml-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="services padding-top-huge has-background-light">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="3" className="p-5">
            <img src={Teamwork} alt="Esperienza"/>
            <span className="box-title">Esperienza</span>
            <p>Soluzioni progettate da analisti e specialisti di settore che affiancano il cliente in ogni fase del
              progetto</p>
          </Col>
          <Col xs lg="3" className="p-5">
            <img src={Laptop} alt="Qualità"/>
            <span className="box-title">Qualità</span>
            <p>Tecnici e sviluppatori altamente qualifiicati, aggiornamento sulle nuove tecnologie.</p>
          </Col>
          <Col xs lg="3" className="p-5">
            <img src={Chat} alt="Affidabilità"/>
            <span className="box-title">Affidabilità</span>
            <p>Chiarezza e rispetto delle consegne, riservatezza e professionalità nel rapporto coi nostri clienti</p>
          </Col>
          <Col xs lg="3" className="p-5">
            <img src={Chat} alt="Affidabilità"/>
            <span className="box-title">Tecnologie adottate e modalità di lavoro</span>
            <p>Descrizione delle tecnologie adottate e modalità dio lavoro</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row noGutters>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(https://source.unsplash.com/WLUHO9A_xik/1000x800)` }}></div>
          </Col>
          <Col>
            <div className="p-5 has-background-white">
              <div className="is-text-box">
                <div>
                  <h3 className="mb-4">Lorem Ipsum dolor</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula,
                    massa sed condimentum sollicitudin, nulla.</p>
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
                  <h3 className="mb-4">Lorem Ipsum dolor</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula,
                    massa sed condimentum sollicitudin, nulla.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(https://source.unsplash.com/WLUHO9A_xik/1000x800)` }}></div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="has-background-primary padding-bottom-small padding-top-small">
      <Container>
        <Row>
          <Col><h3 className="h2 text-white">Contattaci per un preventivo gratuito</h3></Col>
          <Col className="text-right">
            <Link to="/" className="btn btn-outline-white">
              Contattaci
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="services padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">Cosa offriamo ai nostri clienti</h2>
            <p className="mb-5">Strumenti moderni e innovativi, il perfetto compendio per le attività di Tour Operator e
              agenzie di
              viaggio</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col>
            <Image src="https://source.unsplash.com/WLUHO9A_xik/1200x600" alt="huge"/>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="features padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">I nostri servizi</h2>
            <p>Facilitiamo il tuo business, da sempre</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Esperienza pluriennale</span>
                <p>Nor again is there anyone who loves or pursues or desires to obtain of itself.</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 6 }}>
            <Image src="https://source.unsplash.com/WLUHO9A_xik/1000x800" alt="title" fluid/>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <h3 className="mb-5">Titolo va qui</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula, massa sed condimentum
              sollicitudin, nulla</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 5 }}>
            <h3 className="mb-5">Titolo va qui</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula, massa sed condimentum
              sollicitudin, nulla</p>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Image src="https://source.unsplash.com/WLUHO9A_xik/1000x800" alt="title" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default SolutionsPage
