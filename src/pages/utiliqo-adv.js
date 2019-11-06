import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image, Tab, Nav, img } from "react-bootstrap"

import Screenshot from "../images/screenshot.jpg"
//import SmartEye from "../images/smarteye.jpg"

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
import Device from "../images/device-right.png"
import Utiliqo from "../images/utiliqo.svg"
import Integration from "../images/integrazione-prodotto.svg"
import Solutions from "../images/worldwide.svg"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "utiliqo-adv" }}>
    <SEO title="Utiliqo ADV - Gestionale per Agenzie di Viaggio"/>

    <Jumbotron fluid className="min-vh-100 min-vw-100 d-flex align-items-center has-background-half">
      <Container style={{ marginTop: "88px" }}>
        <Row className="align-items-center">
          <Col xs={10} md="8" lg="5">
            <h1 className="is-jumbotron-title mb-4">UTILIQO ADV</h1>
            <p className="size-m mb-4">Utiliqo è la soluzione ideale<br/> progettato per velocizzare<br/> le attività degli agenti di viaggio.</p>
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

    <section className="has-background-primary padding-bottom-small padding-top-small">
      <Container>
        <Row>
          <Col xs={12} md={8} className="mb-4 mb-lg-0"><h3 className="h2 text-white">Vuoi snellire i tuoi strumenti di prenotazione?</h3></Col>
          <Col xs={12} md={4} className="text-lg-right">
            <Link to="/" className="btn btn-outline-white">
              Contattaci
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="features padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">I punti di forza</h2>
            <p>Facilitiamo il tuo business, da sempre</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Processi operativi<br/> semplificati e velocizzati</span>
                <p>Puoi concentrarti esclusivamente sulla consulenza e sulla vendita perché tutto il resto è gestito dallo strumento.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Risparmio consistente<br/> di costi e tempo</span>
                <p>Tutte le problematiche sistemistiche, di monitoring e di backup sono gestite dalla infrastruttura in cloud.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Gestione evoluta<br/> delle pratiche viaggio</span>
                <p>Puoi gestire pratiche miste con servizi in intermediazione e organizzazione sia in regime ordinario sia in regime 74 Ter.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Configurazione layout e processi di prenotazione</span>
                <p>Puoi impostare l'interfaccia che più semplifica il tuo modo di lavorare grazie ai numerosi di meotodi di personalizzazione.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Prenotazione dei servizi <br/>guidata e adatabbile</span>
                <p>Con pochi click si possono svolgere complicate e dispendiose operazioni di prenotazione. Le azioni ricorrenti possono essere adattate alle proprie esigenze.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Solutions} alt="Esperienza pluriennale" /></div>
              <div>
                <span>Ambiente di lavoro personalizzato</span>
                <p>L'interfaccia si adatta al proprio metodo di lavoro, mostrando o nascondendo le funzionalità che si preferisce.</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-small has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={{ span: 3 }} className="mb-4 mb-lg-0">
            <Image src={Utiliqo} alt="Soluzioni gestionali Utiliqo" fluid/>
          </Col>
          <Col xs={12} md={{ span: 8, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Velocizza il tuo lavoro con lo SmartEye</h3>
            <p className="mb-4">La ricerca dei servizi può essere svolta in pochi e semplici passaggi, partendo dall'interfaccia di UTILIQO che grazie al suo automatismo aiuterà il banconista o utente a ricercare prodotto in modo semplice e veloce.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{order: 2, span: 12}} md={{ span: 8, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Migliori il tuo lavoro con lo SmartCopy</h3>
            <p>E’ un plus del nostro gestionale, è un processo automatizzato che permette di velocizzare le operazioni del banconista . L’agente di viaggio grazie allo smart copy potrà concentrarsi esclusivamente sulla consulenza e sulla vendita perché tutto il resto sarà gestito dallo strumento. Questo strumento farà risparmiare tempo e costi che pesano sull operatività del banconista.</p>
          </Col>
          <Col xs={{order: 1, span: 4}} md={{ span: 3, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={Utiliqo} alt="Integrazioni prodotto da provider" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="features padding-top-huge padding-bottom-huge">
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
                <img src={Agenda} alt="Agenda"/>
                <span>Agenda</span>
                <p>Puoi assegnare e gestire attività, scadenze e scambio di informazioni in modo organico.</p></div>
            </div>
          </Col>
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
                <p>Puoi archiviare e consultare facilmente qualsiasi tipo di documento.</p></div>
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
