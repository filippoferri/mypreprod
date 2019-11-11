import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image } from "react-bootstrap"

import Integration from "../images/integrazione-prodotto.svg"
import Utiliqo from "../images/utiliqo.svg"
import CRM from "../images/crm.svg"
import B2B from "../images/b2b.svg"
import XML from "../images/xml.svg"
import Device from "../images/device-right.png"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "soluzioni" }}>
    <SEO title="Soluzioni per il travel"/>

    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(https://source.unsplash.com/rf6ywHVkrlY/20000x1000)` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Soluzioni</h1>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-small">
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 5 }}>
            <h3 className="mb-5">Semplifica il tuo lavoro con soluzioni ad hoc</h3>
            <p>La nostra esperienza a stretto contatto con le necessita e le esigenze del Business.</p>
            <p>Siamo esperti nel settore turismo, la nostra forza è quella di esserci sempre dedicati a questo settore tanto affascinante ma anche tanto complesso e dinamico.</p>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Image src={Device} alt="Semplifica il tuo lavoro con soluzioni ad hoc" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="gestionali" className="padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={{ span: 3 }} className="mb-4 mb-lg-0">
            <Image src={Utiliqo} alt="Soluzioni gestionali Utiliqo" fluid/>
          </Col>
          <Col xs={12} md={{ span: 8, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Soluzioni gestionali Utiliqo</h3>
            <p className="mb-4">Il Gestionale Turismo modulare pensato e sviluppato da WAVECODE copre le esigenze gestionali di Agenzie di Viaggio, Network e Tour Operator. Il gestionale è integrabile con altri prodotti, per permetterti di automatizzare il lavoro quotidiano e risparmiare tempo nelle operazioni di tutti i giorni per poterlo dedicare ai tuoi clienti.</p>
            <Link to="/utiliqo-adv" className="btn btn-primary">
              Utiliqo ADV
            </Link>
            <Link to="/utiliqo-to" className="btn btn-primary ml-3">
              Utiliqo TO
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="has-background-primary padding-bottom-small padding-top-small">
      <Container>
        <Row>
          <Col xs={12} md={8} className="mb-4 mb-lg-0"><h3 className="h2 text-white">Vuoi integrare Utiliqo con il tuo CRM?</h3></Col>
          <Col xs={12} md={4} className="text-lg-right">
            <Link to="/" className="btn btn-outline-white">
              Contattaci
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="integrazioni" className="padding-top-huge padding-bottom-small has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{order: 2, span: 12}} md={{ span: 8, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Integrazioni prodotto da provider</h3>
            <p>Consolidata esperienza nelle integrazioni con varie tipologie di provider. Di seguito alcuni dei principali provider che abbiamo già integrato. La lista è in costante aggiornamento: se non trovi il provider di tuo interesse, chiedi pure a noi, lo integreremo volentieri!</p>
            <p>Banche letti e distributori hotel: GTA, Hotelbeds, TeamAmerica, Magic Arabia, Travalco, JTB, AlphaTour, Tekura Thaiti Travels, Miki Travels, JacTravel, Bonotel, Abreu, YouTravel…</p>
            <p>GDS e CRS: Sabre, Amadeus, Travelfusion</p>
            <p>Autonoleggi e servizi: Hertz, Enterprise</p>
          </Col>
          <Col xs={{order: 1, span: 4}} md={{ span: 3, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={Integration} alt="Integrazioni prodotto da provider" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="xml" className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={{ span: 3 }} className="mb-4 mb-lg-0">
            <Image src={XML} alt="Distribuzione prodotto XML" fluid/>
          </Col>
          <Col xs={12} md={{ span: 8, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Distribuzione prodotto XML</h3>
            <p>Sviluppiamo web service per la distribuzione dei tuoi prodotti a partner di integrazione (OLTA, aggregatori, banche letti, etc.). </p>
            <p>I servizi che sviluppiamo seguono i principali standard di mercato, ma se hai bisogno di interfacciarti ad un cliente specifico siamo pronti a sviluppare la tua soluzione ad hoc.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="portali" className="padding-bottom-small has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{span: 12, order: 2}} md={{ span: 8, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Portali Web B2B, B2C e White Label</h3>
            <p>Creeremo il sito più idoneo alle tue esigenze, per permettere la consultazione e la prenotazione di prodotto ai tuoi clienti. </p>
            <p>Svilupperemo una soluzione integrata dalla ricerca di prodotto sul tuo sistema o su connettori, alla prenotazione, al pagamento online. Il tutto perfettamente integrato con i tuoi sistemi.</p>
          </Col>
          <Col xs={{span: 4, order: 1}} md={{ span: 3, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={B2B} alt="Portali Web B2B, B2C e White Label" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{span:4 }} md={{ span: 3 }} className="mb-4 mb-lg-0">
            <Image src={CRM} alt="Soluzioni CRM e gestione clienti" fluid/>
          </Col>
          <Col xs={{span: 12}} md={{ span: 8, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Soluzioni CRM e gestione clienti</h3>
            <p>Sviluppiamo soluzioni ad hoc per la gestione dei tuoi clienti, invio di comunicazioni, documenti e newsletter, coupon e campagne commerciali.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">La nostra forza</h2>
            <p className="mb-4 mb-lg-5">Affidabilità, tempi di consegna dei progetti puntuali. La nostra forza sono il risultato di studi analisi e ricerche di strumenti su misura, finalizzati all'efficienza e all'efficacia di chi li usa. La nostra forza è la consulenza e l'assistenza costante con i nostri clienti </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col>
            <Image src="https://source.unsplash.com/5fNmWej4tAA/1200x800" alt="huge" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default SolutionsPage
