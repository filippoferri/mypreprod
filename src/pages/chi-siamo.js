import React from "react"
//import { Link } from "gatsby"
import { Row, Col, Container, Jumbotron, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Hero from "../images/hero.jpg"
import Device from "../images/device-left.png"

import MarcoFilippetti from "../images/team/marco-filippetti.jpg"
import AndreaPiccioni from "../images/team/andrea-piccioni.jpg"
import LorenzoIacovone from "../images/team/lorenzo-iacovone.jpg"
import FedericoGiovannini from "../images/team/federico-giovannini.jpg"
import RaffaeleFuggiano from "../images/team/raffaele-fuggiano.jpg"
import AntonioGaglio from "../images/team/antonio-gaglio.jpg"
import DavideOlivieri from "../images/team/davide-olivieri.jpg"
import TommasoMencarelli from "../images/team/tommaso-mencarelli.jpg"
import AndreaDelBene from "../images/team/andrea-del-bene.jpg"
import MatteoCrosta from "../images/team/matteo-crosta.jpg"
import FilippoFerri from "../images/team/filippo-ferri.jpg"
import MarcoMalagoli from "../images/team/marco-malagoli.jpg"
import MichelePaoloFinzi from "../images/team/michele-paolo-finzi.jpg"
import FabioVentura from "../images/team/fabio-ventura.jpg"
import TommasoMarchionni from "../images/team/tommaso-marchionni.jpg"
import DarioBergamini from "../images/team/dario-bergamini.jpg"
import AndreaDAngelo from "../images/team/andrea-d-angelo.jpg"
import AlessandroDomeniconi from "../images/team/alessandro-domeniconi.jpg"


const AboutUsPage = () => (
  <Layout pageInfo={{ pageName: "chi-siamo" }}>
    <SEO title="Chi siamo"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(https://source.unsplash.com/m3PYWZvKvoQ/20000x1000})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center text-white mt-5">Chi siamo</h1>
      </Container>
    </Jumbotron>

    <section className="padding-top-huge">
      <Container>
        <Row className="align-items-center">
          <Col md={{span: 6}}>
            <Image src={Device} alt="" fluid />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <h3 className="mb-4">Esperienza.<br/>Qualità<br/>Affidabilità </h3>
            <p>Siamo un Team di esperti e specialisti di settore pronti ad offrirti le soluzioni tecnologiche più adatte alle tue esigenze e ad affiancarti in ogni fase dei tuoi progetti.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs lg="6">
            <h3 className="mb-4">Conosci il nostro Team</h3>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula, massa</p>
          </Col>
        </Row>
        <Row>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={MarcoFilippetti} alt="title" fluid/>
              <h3 className="h5">Marco Filippetti</h3>
              <span>CEO</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={AndreaPiccioni} alt="Andrea Piccioni" fluid/>
              <h3 className="h5">Andrea Piccioni</h3>
              <span>CTO</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={LorenzoIacovone} alt="Lorenzo Iacovone" fluid/>
              <h3 className="h5">Lorenzo Iacovone</h3>
              <span>CTO</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={FedericoGiovannini} alt="Federico Giovannini" fluid/>
              <h3 className="h5">Federico Giovannini</h3>
              <span>Scrum Master &<br/> Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={RaffaeleFuggiano} alt="Raffaele Fuggiano" fluid/>
              <h3 className="h5">Raffaele Fuggiano</h3>
              <span>Business Analyst &<br/> Service Manager</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={AntonioGaglio} alt="Antonio Gaglio" fluid/>
              <h3 className="h5">Antonio Gaglio</h3>
              <span>Business Analyst &<br/> System Integration Specialist</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={DavideOlivieri} alt="Davide Olivieri" fluid/>
              <h3 className="h5">Davide Olivieri</h3>
              <span>Business Analyst &<br/> Service Desk</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={MarcoMalagoli} alt="Marco Malagoli" fluid/>
              <h3 className="h5">Marco Malagoli</h3>
              <span>Software Analyst</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={MichelePaoloFinzi} alt="Michele Paolo Finzi" fluid/>
              <h3 className="h5">Michele Paolo Finzi</h3>
              <span>Software Analyst</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={TommasoMencarelli} alt="Tommaso Mencarelli" fluid/>
              <h3 className="h5">Tommaso Mencarelli</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={DarioBergamini} alt="Dario Bergamini" fluid/>
              <h3 className="h5">Dario Bergamini</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={AndreaDAngelo} alt="Andrea D'Angelo" fluid/>
              <h3 className="h5">Andrea D'Angelo</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={AlessandroDomeniconi} alt="Alessandro Domeniconi" fluid/>
              <h3 className="h5">Alessandro Domeniconi</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={AndreaDelBene} alt="Andrea Del Bene" fluid/>
              <h3 className="h5">Andrea Del Bene</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={MatteoCrosta} alt="Matteo Crosta" fluid/>
              <h3 className="h5">Matteo Crosta</h3>
              <span>Frontend Web Developer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={FabioVentura} alt="Fabio Ventura" fluid/>
              <h3 className="h5">Fabio Ventura</h3>
              <span>Frontend Web Developer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={TommasoMarchionni} alt="Tommaso Marchionni" fluid/>
              <h3 className="h5">Tommaso Marchionni</h3>
              <span>Frontend Web Developer</span>
            </div>
          </Col>
          <Col lg="3" className="text-center">
            <div className="mb-5">
              <Image className="mb-4" src={FilippoFerri} alt="Filippo Ferri" fluid/>
              <h3 className="h5">Filippo Ferri</h3>
              <span>Head Of Product Design</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default AboutUsPage
