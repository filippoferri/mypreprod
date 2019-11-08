import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image, Tab, Nav, img } from "react-bootstrap"

import Hero from "../images/jpg/hero.jpg"
import Security from "../images/jpg/security.jpg"
import Microservices from "../images/jpg/microservices.jpg"
import Data from "../images/jpg/data.jpg"
import Dashboard from "../images/jpg/dashboard.png"
import Charts from "../images/jpg/charts.png"

import { Link } from "gatsby"
import Simply from "../images/svg/computer.svg"
import Cloud from "../images/svg/cloud-computing.svg"
import Future from "../images/svg/future.svg"
import SmartEye from "../images/svg/smarteye.svg"
import SmartLoader from "../images/svg/smartloader.svg"
import Fast from "../images/svg/fast.svg"
import SaveTime from "../images/svg/save-time.svg"
import Manage from "../images/svg/manage.svg"
import Config from "../images/svg/config.svg"
import Guided from "../images/svg/guided.svg"
import Custom from "../images/svg/custom.svg"

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "utiliqo-to" }}>
    <SEO title="Utiliqo TO - Gestionale per Tour Operator"/>

    <Jumbotron fluid className="min-vh-100 d-flex align-items-center has-background-half">
      <Container style={{ marginTop: "88px" }} fluid>
        <Row className="align-items-center">
          <Col xs={10} md={{span: 6}} lg={{span: 4, offset: 1}}>
            <h1 className="is-jumbotron-title mb-4">UTILIQO TO</h1>
            <p className="size-m mb-4">UTILIQO è l’applicazione gestionale per Tour Operator completa e flessibile, per velocizzare e semplificare le attività degli operatori del settore.</p>
          </Col>
          <Col xs={12} lg={{span: 6}} className="text-center">
            <Image src={Hero} alt="" fluid/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

    <section className="services padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">La forza di Utiliqo TO</h2>
            <p>Un prodotto nuovo sul mercato pronto a risolvere le numerose problematiche che un Tour Operator deve affrontare.</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Simply} alt="Procedure automatizzate"/>
            <span className="box-title">Procedure<br/> automatizzate</span>
            <p>Processi di apprendimento, procedure più efficienti e automatizzate.</p>
          </Col>
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Future} alt="Tecnologie moderne"/>
            <span className="box-title">Tecnologie<br/> moderne</span>
            <p>Tecnologie utilizzate moderne e già proiettate al futuro. Nessun vincolo a noi come fornitori.</p>
          </Col>
          <Col xs={12} lg="4" className="p-2 p-lg-5">
            <img src={Cloud} alt="Applicazione Cloud-based"/>
            <span className="box-title">Applicazione<br/>Cloud-based</span>
            <p>Progettata per il cloud, basato su servizi progettati per garantire scalabilità e affidabilità.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge has-background-light">
      <Container>
        <Row noGutters>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(${Security})` }}></div>
          </Col>
          <Col>
            <div className="p-5 has-background-white">
              <div className="is-text-box">
                <div>
                  <h3 className="mb-4">Security</h3>
                  <p className="mb-4">La sicurezza è uno degli aspetti più importanti. Sono presenti molteplici livelli di sicurezza e di autorizzazione.</p>
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
                  <h3 className="mb-4">Microservices</h3>
                  <p className="mb-4">L’implementazione di ogni funzionalità è stata realizzata seguendo il paradigma dei microservice garantendo una risoluzione dei problemi molto veloce e mirata senza blocco del gestionale.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="is-img-box"
                 style={{ backgroundImage: `url(${Microservices})` }}></div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-small">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={{ span: 7 }} className="mb-4 mb-lg-0">
            <Image src={Dashboard} alt="Monitor + Diagnostic" fluid/>
          </Col>
          <Col xs={12} md={{ span: 4, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Monitoring + Diagnostic</h3>
            <p className="mb-4">Tutti i servizi sono costantemente monitorati per avere il completo controllo dei processi in esecuzione.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge">
      <Container>
        <Row className="align-items-center">
          <Col xs={{order: 2, span: 12}} md={{ span: 4, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Cloud & Infrastructure<br/> Cost Management</h3>
            <p>L’architettura cloud-based offre la possibilità di modulare i costi in base alle reali esigenze. Con l’architettura cloud based si ha un TCO  (Total Cost Ownership) completo, reale e senza costi nascosti.</p>
          </Col>
          <Col xs={{order: 1, span: 4}} md={{ span: 7, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={Charts} alt="Cloud & Infrastructure Cost Management" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="features padding-top-huge padding-bottom-huge has-background-light">
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
              <div><img src={Fast} alt="Processi operativi semplificati e velocizzati" /></div>
              <div>
                <span>Aggiornamenti automatici</span>
                <p>Puoi concentrarti esclusivamente sulla consulenza e sulla vendita perché tutto il resto è gestito dallo strumento.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={SaveTime} alt="Risparmio consistente di costi e tempo" /></div>
              <div>
                <span>Velocità delle risposte</span>
                <p>Tutte le problematiche sistemistiche, di monitoring e di backup sono gestite dalla infrastruttura in cloud.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Manage} alt="Gestione evoluta delle pratiche viaggio" /></div>
              <div>
                <span>Linea prodotti ampliabile</span>
                <p>Puoi gestire pratiche miste con servizi in intermediazione e organizzazione sia in regime ordinario sia in regime 74 Ter.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Config} alt="Configurazione personale dei processi di prenotazione" /></div>
              <div>
                <span>Multilingua</span>
                <p>Puoi impostare l'interfaccia che più semplifica il tuo modo di lavorare grazie ai numerosi di meotodi di personalizzazione.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Guided} alt="Prenotazione dei servizi guidata e adatabbile" /></div>
              <div>
                <span>Fusi orari e Time Zone</span>
                <p>Con pochi click si possono svolgere complicate e dispendiose operazioni di prenotazione. Le azioni ricorrenti possono essere adattate alle proprie esigenze.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Custom} alt="Ambiente di lavoro personalizzato" /></div>
              <div>
                <span>User Friendly</span>
                <p>L'interfaccia si adatta al proprio metodo di lavoro, mostrando o nascondendo le funzionalità che si preferisce.</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="align-items-center">
          <Col md={{span: 4}} lg={6}>
            <Image className="mb-4 mb-lg-0" fluid src="https://source.unsplash.com/5p_7M5MP2Iw/1200x1000" alt="La nostra missione"/>
          </Col>
          <Col md={8} lg={{ span: 5, offset: 1 }}>
            <h3 className="mb-4">WHITE LABEL
              INTEGRABILI</h3>
            <p className="mb-4">Grazie ai nostri template custom, il Tour Operator dispone di White Label create su misura, integrabili con siti web di agenzie di viaggio o qualsiasi altro cliente.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-small has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={{ span: 3 }} className="mb-4 mb-lg-0">
            <Image src={SmartEye} alt="Accelera il tuo lavoro con lo SmartEye" fluid/>
          </Col>
          <Col xs={12} md={{ span: 8, offset: 1 }}>
            <h3 className="mb-4 mb-lg-5">Accelera il tuo lavoro con lo SmartEye</h3>
            <p className="mb-4">La ricerca di servizi può essere svolta in pochi e semplici passaggi, partendo dall’interfaccia di UTILIQO.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{order: 2, span: 12}} md={{ span: 8, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Semplifica il tuo lavoro con lo SmartLoading</h3>
            <p>Consente di gestire tutte le condizioni contrattuali relative a costi, prezzi e quantità di strutture ricettive o servizi di trasporto. Inoltre permette all’albergatore di caricare da remoto la propria disponibilità direttamente all’interno del gestionale.</p>
          </Col>
          <Col xs={{order: 1, span: 4}} md={{ span: 3, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={SmartLoader} alt="Semplifica il tuo lavoro con lo SmartLoading" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h2 className="mb-4">Una banca dati infinita</h2>
            <p className="mb-4 mb-lg-5">UTILIQO si integra con un metodo di raccolta e analisi dati per elaborare risultati più accurati al fine di identificare nuove opportunità di profitto. Il Tour Operator avrà a disposizione una data collection in continua crescita. </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col>
            <Image src={Data} alt="Una banca dati infinita" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default SolutionsPage
