import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image, Tab, Nav, img } from "react-bootstrap"

import Screenshot from "../images/screenshot.jpg"
import SmartEye from "../images/smarteye.jpg"

import Edenviaggi from "../images/providers/edenviaggi.png"
import Booking from "../images/providers/booking.com.png"
import Alpitour from "../images/providers/alpitour.png"
import Veratour from "../images/providers/veratour.png"
import Expedia from "../images/providers/expedia.png"
import Hertz from "../images/providers/hertz.png"

import File from "../images/pratica.png"
import Tickets from "../images/biglietteria.png"
import Stats from "../images/statistiche.jpg"

import Archive from "../images/archive.svg"
import Agenda from "../images/agenda.svg"
import Clients from "../images/clients.svg"
import Docs from "../images/docs.svg"
import Scroll from "../images/scroll.svg"
import Network from "../images/network.svg"
import Shield from "../images/shield.svg"

import { Link } from "gatsby"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "utiliqo-to" }}>
    <SEO title="Utiliqo TO - Gestionale per Tour Operator"/>

    <Jumbotron fluid className="min-vh-100 min-vw-100 d-flex align-items-center has-background-half">
      <Container style={{ marginTop: "88px" }}>
        <Row className="align-items-center">
          <Col xs={10} md="8" lg="5">
            <h1 className="is-jumbotron-title mb-4">La soluzione ideale<br/> per gli agenti di viaggio e TO</h1>
            <p className="size-m mb-4">Utiliqo è un gestionale<br/> progettato per velocizzare<br/> le
              tue attività.</p>
          </Col>
          <Col xs={12} lg="7">
            <Image src={Screenshot} alt="" fluid/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

    <section className="padding-top-small padding-bottom-small">
      <Container className="text-center">
        <h3>Utiliqo è integrato con i principali provider</h3>
        <div className="logo-provider-wrapper">

          <Image src={Edenviaggi} alt="Utiliqo si integra con Eden Viaggi"/>
          <Image src={Booking} alt="Utiliqo si integra con Booking.com"/>
          <Image src={Alpitour} alt="Utiliqo si integra con Alpitour"/>
          <Image src={Veratour} alt="Utiliqo si integra con Veratour"/>
          <Image src={Expedia} alt="Utiliqo si integra con Expedia"/>
          <Image src={Hertz} alt="Utiliqo si integra con Hertz"/>

          <div className="text-center">...e molti altri</div>
        </div>
      </Container>
    </section>

    <section className="services padding-top-small padding-bottom-small has-background-light">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4">Scopri la chiave della semplicità</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} md="4" lg="3" className="p-2 mb-4 mb-lg-0">
            <img src={Shield} alt="Leggero e sicuro"/>
            <span className="box-title">Leggero e sicuro</span>
            <p>Elimina il peso di hardware, manutenzione e personale tecnico</p>
          </Col>
          <Col xs={12} md="4" lg="3" className="p-2 mb-4 mb-lg-0">
            <img src={Network} alt="Accessibile e flessibile"/>
            <span className="box-title">Accessibile e flessibile</span>
            <p>È accessibile da qualsisasi parte del mondo, sempre</p>
          </Col>
          <Col xs={12} md="4" lg="3" className="p-2 mb-4 mb-lg-0">
            <img src={Scroll} alt="Facile e moderno"/>
            <span className="box-title">Facile e moderno</span>
            <p>Lo sai già usare... continui a lavorare come sei abituato</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-5">Il tuo partner completo</h3>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="align-items-center">
            <Col sm={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Image src={File} fluid/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Image src={Tickets} fluid/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Image src={Screenshot} fluid/>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Image src={Stats} fluid/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col sm={5}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span className="tab-title">Pratica di viaggio</span>
                    <span>Registri preventivi e pratiche di viaggio di servizi intermediati e di servizi organizzati.</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span className="tab-title">Biglietteria </span>
                    <span>Gestisci facilmente i biglietti sfruttando le integrazioni disponibili verso i principali GDS.</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <span className="tab-title">Contabilità</span>
                    <span>Emetti, trasmetti e conservi le fatture elettroniche, in regime ordinario e 74ter.</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <span className="tab-title">Statistiche</span>
                    <span>Generi report a supporto dell’operatività e analizzi le performance aziendali.</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>

    <section className="services padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4">Velocizzi il tuo lavoro<br/> con lo SmartEye</h3>
            <p className="mb-5">Con un solo click effettui ricerche<br/> sui principali siti di prenotazione online</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center mb-5">
          <Col>
            <Image src={SmartEye} alt="Smart Eye" fluid/>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="10">
            <h4 className="mb-4">Integrato con i tuoi servizi di prenotazione online.</h4>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="services padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4">Migliori il tuo lavoro con lo SmartCopy</h3>
            <p className="mb-4 mb-lg-5">Sviluppato per lavorare al tuo fianco, <br/>facendoti risparmiare tempo.</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col className="mb-4 mb-lg-0">
            <Image src={Screenshot} fluid/>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="10">
            <h4 className="mb-4">Registri con un solo click le prenotazioni<br/> effettuate sui principali siti di
              prenotazione online.</h4>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="features padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col lg="6">
            <h3 className="mb-5">Soddisfi le tue esigenze professionali</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg="3" className="mb-5 mb-lg-0">
            <div className="box-img-top">
              <div>
                <img src={Archive} alt="Archivi di base"/>
                <span>Archivi di base</span>
                <p>Disponi di un utile set di dati pronto all’uso, come aeroporti, località e configurazioni
                  contabili.</p></div>
            </div>
          </Col>
          <Col xs={12} lg="3" className="mb-5 mb-lg-0">
            <div className="box-img-top">
              <div>
                <img src={Docs} alt="Archiviazione documenti"/>
                <span>Archiviazione documenti</span>
                <p>Puoi archiviare e consultare qualsiasi tipo di documento.</p></div>
            </div>
          </Col>
          <Col xs={12} lg="3" className="mb-5 mb-lg-0">
            <div className="box-img-top">
              <div>
                <img src={Agenda} alt="Agenda"/>
                <span>Agenda</span>
                <p>Puoi assegnare e gestire attività, scadenze e scambio di informazioni in modo organico.</p></div>
            </div>
          </Col>
          <Col xs={12} lg="3">
            <div className="box-img-top">
              <div>
                <img src={Clients} alt="Gestione clienti"/>
                <span>Gestione clienti</span>
                <p>Tracci le abitudini di viaggio, facilitando la relazione e la fidelizzazione dei clienti.</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="has-background-primary padding-bottom-small padding-top-small">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mb-4 mb-lg-0"><h3 className="h2 text-white">Vuoi ricevere un preventivo gratuito?</h3></Col>
          <Col xs={12} lg={4} className="text-lg-right">
            <Link to="/contattaci" className="btn btn-outline-white">
              Contattaci ora
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default SolutionsPage
