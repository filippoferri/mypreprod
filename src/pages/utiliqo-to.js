import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Jumbotron, Image, img } from "react-bootstrap"

import Hero from "../images/jpg/hero.jpg"
import Security from "../images/jpg/security.jpg"
import Microservices from "../images/jpg/microservices.jpg"
import Data from "../images/jpg/data.jpg"
import LifeCycle from "../images/jpg/utiliqo-lifecycle.jpg"
import Dashboard from "../images/jpg/dashboard.png"
import Charts from "../images/jpg/charts.png"

//import { Link } from "gatsby"
import Simply from "../images/svg/computer.svg"
import Cloud from "../images/svg/cloud-computing.svg"
import Future from "../images/svg/future.svg"
import SmartEye from "../images/svg/smarteye.svg"
import SmartLoader from "../images/svg/smartloader.svg"
import Updates from "../images/svg/updates.svg"
import Timezone from "../images/svg/timezone.svg"
import Multilanguage from "../images/svg/multilanguage.svg"
import UserFriendly from "../images/svg/user-friendly.svg"
import Increase from "../images/svg/increase.svg"
import Speed from "../images/svg/speed.svg"

const UtiliqoTOPage = () => (
  <Layout pageInfo={{ pageName: "utiliqo-to" }}>
    <SEO title="Utiliqo TO - Gestionale per Tour Operator"/>

    <Jumbotron fluid className="min-vh-lg-100 d-flex align-items-center has-background-half">
      <Container style={{ marginTop: "88px" }} fluid>
        <Row className="align-items-center">
          <Col xs={10} md={{ span: 6 }} lg={{ span: 4, offset: 1 }}>
            <h1 className="is-jumbotron-title mb-4">UTILIQO TO</h1>
            <p className="size-m mb-4">UTILIQO è l’applicazione gestionale per Tour Operator completa e flessibile, per
              velocizzare e semplificare le attività degli operatori del settore.</p>
          </Col>
          <Col xs={12} lg={{ span: 6 }} className="text-center">
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
            <p>Un prodotto nuovo sul mercato pronto a risolvere le numerose problematiche che un Tour Operator deve
              affrontare.</p>
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
          <Col className="d-none d-lg-block">
            <div className="is-img-box"
                 style={{ backgroundImage: `url(${Security})` }}></div>
          </Col>
          <Col>
            <div className="p-lg-5 has-background-white">
              <div className="is-text-box">
                <div>
                  <h3 className="mb-4">Security</h3>
                  <p className="mb-4">La sicurezza è uno degli aspetti più importanti. Sono presenti molteplici livelli
                    di sicurezza e di autorizzazione.</p>
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
                  <p className="mb-4">L’implementazione di ogni funzionalità è stata realizzata seguendo il paradigma
                    dei microservice garantendo una risoluzione dei problemi molto veloce e mirata senza blocco del
                    gestionale.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-none d-lg-block">
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
            <p className="mb-4">Tutti i servizi sono costantemente monitorati per avere il completo controllo dei
              processi in esecuzione.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge">
      <Container>
        <Row className="align-items-center">
          <Col xs={{ order: 2, span: 12 }} md={{ span: 4, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Cloud & Infrastructure<br/> Cost Management</h3>
            <p>L’architettura cloud-based offre la possibilità di modulare i costi in base alle reali esigenze. Con
              l’architettura cloud based si ha un TCO (Total Cost Ownership) completo, reale e senza costi nascosti.</p>
          </Col>
          <Col xs={{ order: 1, span: 4 }} md={{ span: 7, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
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
              <div><img src={Updates} alt="Aggiornamenti automatici"/></div>
              <div>
                <span>Aggiornamenti automatici</span>
                <p>Nel corso del tempo il gestionale si rinnova abbracciando sempre le ultime tecnologie.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Speed} alt="Velocità delle risposte"/></div>
              <div>
                <span>Velocità delle risposte</span>
                <p>Le modifiche, anche urgenti, vengono accolte ed esaudite in tempi brevi.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Increase} alt="Linea prodotti ampliabile"/></div>
              <div>
                <span>Linea prodotti ampliabile</span>
                <p>Integrando qualsiasi prodotto via XML dai vari wholesalers del mondo.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Timezone} alt="Fusi orari e Time Zone"/></div>
              <div>
                <span>Fusi orari e Time Zone</span>
                <p>Gestione completa dei fusi orari per la massima libertà di inserimento dati.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={UserFriendly} alt="User Friendly"/></div>
              <div>
                <span>User Friendly</span>
                <p>L'interfaccia è ottimizzata per una migliore user experience.</p></div>
            </div>
          </Col>
          <Col xs lg="4">
            <div className="box-img-left">
              <div><img src={Multilanguage} alt="Multilingua"/></div>
              <div>
                <span>Multilingua</span>
                <p>L'interfaccia è localizzata nelle principali lingue mondiali.</p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 4 }} lg={6}>
            <Image className="mb-4 mb-lg-0" fluid src="https://source.unsplash.com/5p_7M5MP2Iw/1200x1000"
                   alt="La nostra missione"/>
          </Col>
          <Col md={8} lg={{ span: 5, offset: 1 }}>
            <h3 className="mb-4">White Label integrabili</h3>
            <p className="mb-4">Grazie ai nostri template custom, il Tour Operator dispone di White Label create su
              misura, integrabili con siti web di agenzie di viaggio o qualsiasi altro cliente.</p>
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
            <p className="mb-4">La ricerca di servizi può essere svolta in pochi e semplici passaggi, partendo
              dall’interfaccia di UTILIQO.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge has-background-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={{ order: 2, span: 12 }} md={{ span: 8, order: 1 }}>
            <h3 className="mb-4 mb-lg-5">Semplifica il tuo lavoro con lo SmartLoading</h3>
            <p>Consente di gestire tutte le condizioni contrattuali relative a costi, prezzi e quantità di strutture
              ricettive o servizi di trasporto. L'usabilità e la User Experience permettono un'apprendimento
              dell'utilizzo dello strumento veloce e semplice.</p>
          </Col>
          <Col xs={{ order: 1, span: 4 }} md={{ span: 3, offset: 1, order: 2 }} className="mb-4 mb-lg-0">
            <Image src={SmartLoader} alt="Semplifica il tuo lavoro con lo SmartLoading" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-huge">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4">Una banca dati infinita</h3>
            <p className="mb-4 mb-lg-5">UTILIQO si integra con un metodo di raccolta e analisi dati per elaborare
              risultati più accurati al fine di identificare nuove opportunità di profitto. Il Tour Operator avrà a
              disposizione una data collection in continua crescita. </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col>
            <Image src={Data} alt="Una banca dati infinita" fluid/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-top-huge padding-bottom-small has-background-dark">
      <Container>

        <Row className="justify-content-center">
          <Col xs={{span: 12 }} md={{ span: 4 }}>
            <h3 className="mb-4 mb-lg-5 text-white">Utiliqo Circle-Life </h3>
          </Col>
          <Col xs lg="10" className="text-center">
            <Image src={LifeCycle} fluid/>
          </Col>
        </Row>
      </Container>


    </section>

  </Layout>
)

export default UtiliqoTOPage
