import React from "react"
import { Row, Col, Container, Jumbotron, img, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Laptop from "../images/laptop.svg"
import Chat from "../images/chat.svg"
import Teamwork from "../images/teamwork.svg"
import Solutions from "../images/worldwide.svg"
import Improving from "../images/laptop-2.svg"
import Networking from "../images/networking-3.svg"
import Browser from "../images/browser.svg"
import World from "../images/world.svg"

//import Screenshot from "../images/screenshot.png"
import Abstract from "../images/abstract.png"
import Hero from "../images/hero.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Wavecode - Soluzione per il turismo" keywords={[`gatsby`, `react`, `bootstrap`]}/>
    <Jumbotron fluid className="min-vh-100 min-vw-100 d-flex align-items-center">

      <div className="is-bg-section" style={{backgroundImage: `url(${Hero})`}}></div>

      <Container style={{zIndex: '2' }}>
        <h1 className="mt-5">Progettazione e sviluppo<br/> di soluzioni software in<br/> ambito turistico</h1>
        <p>
          Dedicato a Tour Operator e agenzie di viaggio
        </p>
        <Link to="/chi-siamo" className="btn btn-primary">
          Chi siamo
        </Link>
        <Link to="/soluzioni" className="btn btn-primary ml-3">
          Soluzioni
        </Link>
      </Container>
    </Jumbotron>
    <section className="services padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">Cosa offriamo ai nostri clienti</h2>
            <p>Strumenti moderni e innovativi, il perfetto compendio per le attività di Tour Operator e agenzie di
              viaggio</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Teamwork} alt="Esperienza"/>
            <span className="box-title">Esperienza</span>
            <p>Soluzioni progettate da analisti e specialisti di settore che affiancano il cliente in ogni fase del
              progetto</p>
          </Col>
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Laptop} alt="Qualità"/>
            <span className="box-title">Qualità</span>
            <p>Tecnici e sviluppatori altamente qualifiicati, aggiornamento sulle nuove tecnologie.</p>
          </Col>
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Chat} alt="Affidabilità"/>
            <span className="box-title">Affidabilità</span>
            <p>Chiarezza e rispetto delle consegne, riservatezza e professionalità nel rapporto coi nostri clienti</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="solutions padding-top-huge padding-bottom-huge has-background-light">

      <div className="is-bg-section" style={{backgroundImage: `url(${World})`}}></div>

      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} lg="6">
            <h3 className="mb-4">Soluzioni per il turismo</h3>
            <p className="mb-5">Le soluzioni sono il risultato di studi, analisi e ricerche, di strumenti su misura,
              nati dall’assistenza costante con i nostri clienti</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg="3" className="mb-2 mb-lg-0">
            <div className="is-box is-white text-center">
              <img src={Solutions} alt="Soluzioni Gestionali per TO e Agenzie" />
              <span className="box-title">Soluzioni Gestionali per Tour Operator e Agenzie di Viaggi</span>
            </div>
          </Col>
          <Col xs={12} lg="3" className="mb-2 mb-lg-0">
            <div className="is-box is-white text-center">
              <img src={Improving} alt="Sviluppo portali B2C e/o B2B" />
              <span className="box-title">Sviluppo portali <br/>B2C - B2B - B2B2C</span>
            </div>
          </Col>
          <Col xs={12} lg="3" className="mb-2 mb-lg-0">
            <div className="is-box is-white text-center">
              <img src={Networking} alt="Integrazioni prodotti da provider" />
              <span className="box-title">Integrazione prodotti da provider</span>
            </div>
          </Col>
          <Col xs={12} lg="3">
            <div className="is-box is-white text-center">
              <img src={Browser} alt="Distribuzione Prodotto XML" />
              <span className="box-title">Progettazione e sviluppo per distribuzione prodotto via XML</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="solutions padding-top-huge padding-bottom-huge has-background-light">

      <div className="is-bg-section" style={{backgroundImage: `url(${Abstract})`}}></div>

      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4 text-white">I nostri prodotti</h3>
            <p className="mb-5 text-white">Al tuo fianco con prodotti su misura</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg="6" className="mb-2 mb-lg-0">
            <div className="is-box is-white text-center">
              <h4>Utiliqo TO</h4>
              <p>La soluzione gestionale<br/> per Tour Operator</p>
              <Link to="/prodotti" className="btn btn-primary mb-5">
                Scopri Utiliqo
              </Link>
            </div>
          </Col>
          <Col xs={12} lg="6">
            <div className="is-box is-white text-center">
              <h4>Utiliqo ADV</h4>
              <p>La soluzione gestionale<br/> per agenti di viaggio</p>
              <Link to="/prodotti" className="btn btn-primary mb-5">
                Scopri Utiliqo
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="align-items-center">
          <Col md={{span: 4}} lg={6}>
            <Image className="mb-4 mb-lg-0" fluid src="https://source.unsplash.com/IuLgi9PWETU/1200x1000" alt="La nostra missione"/>
          </Col>
          <Col md={8} lg={{ span: 5, offset: 1 }}>
            <h3 className="mb-4">La nostra missione</h3>
            <p className="mb-4">Crediamo che il software debba essere uno strumento utile per gli utenti, che permetta di ottimizzare il proprio lavoro e di semplificare le procedure, offrendo al tempo stesso il massimo grado di libertà. Le nostre soluzioni software sono state e sono progettate insieme a chi le utilizza, sviluppate in modo da adattarsi il più possibile alle esigenze degli utenti in termini di efficienza, prestazioni e semplicità di utilizzo.</p>
            <Link to="/chi-siamo" className="btn btn-primary">
              Chi siamo
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
