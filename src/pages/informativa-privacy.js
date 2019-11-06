import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

const BlogPostPage = () => (
  <Layout pageInfo={{ pageName: "blog-post" }}>
    <SEO title="Informativa della privacy"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Informativa della privacy</h1>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p>Ai sensi dell’art. 13 del Regolamento (UE) 2016/679 del Parlamento europeo e del
              Consiglio (Regolamento Generale sulla Protezione dei Dati, di seguito il “Regolamento”) desideriamo
              informarla che i Suoi dati personali, da lei liberamente conferiti mediante la compilazione del presente
              form, saranno trattati con modalità informatiche e cartacee da Wave S.r.l. - in qualità di Titolare del
              Trattamento dei dati – al solo fine di dare seguito alla sua richiesta.</p>

            <p>Inoltre, previo suo espresso consenso, il Titolare del Trattamento potrà utilizzare i suoi dati al fine
              di iscriverla alla newsletter periodica per finalità promozionali e di marketing mediante l’invio di
              informazioni e materiale pubblicitario relativo ai nostri servizi e/o prodotti, nonché per inviarle
              comunicazioni relative a modifiche di offerte e promozioni commerciali.</p>

            <p>Sempre previo Suo espresso consenso, il Titolare trasmetterà i Suoi dati a società terze, partner del
              Titolare del Trattamento, che li utilizzeranno per inviarle le loro proposte commerciali. La base
              giuridica del trattamento è il consenso (art. 6 par. 1 lettera a) del GDPR). Fermo restando che nessun
              dato è obbligatorio e che l’unica conseguenza all’omissione dei dati è il mancato riscontro alla Sua
              richiesta, abbiamo contrassegnato con un asterisco (*) le informazioni che riteniamo necessarie per
              fornirle riscontro. In caso di mancato consenso per le finalità di marketing da parte del titolare e/o di
              terzi non ci saranno conseguenze e le verrà comunque riscontrata la sua richiesta. Tali dati saranno
              comunque utilizzati esclusivamente per fornirle le informazioni richieste.</p>

            <p>Qualora lei decida di fornirci i Suoi dati, la informiamo che questi saranno trattati da personale
              autorizzato dal Titolare del trattamento e saranno conservati esclusivamente per il periodo necessario a
              dare seguito alla sua richiesta. L’eventuale ulteriore conservazione dei suddetti dati o parte di essi
              potrà tuttavia essere disposta per far valere o difendere i propri diritti in ogni eventuale sede ed in
              particolare nelle sedi giudiziarie. In nessun caso i suoi dati saranno diffusi ma la informiamo che
              potranno essere comunicati a terzi soggetti che svolgono, per conto del Titolare stesso, specifici servizi
              volti a garantirle il corretto perseguimento della citata finalità.</p>

            <p>Infine per esercitare i diritti di cui all'articolo 15 e seguenti del Regolamento (ottenere la conferma
              circa l'esistenza o meno dei dati stessi e di conoscerne il contenuto e l'origine, verificarne l'esattezza
              o chiederne l'integrazione o l'aggiornamento, la portabilità, la rettifica o la cancellazione se non
              conservati in ottemperanza ad obblighi di legge e ha diritto di opporsi al trattamento per finalità di
              invio di materiale pubblicitario) potrà rivolgersi, senza alcuna formalità prescritta, al Titolare del
              trattamento Wave s.r.l (P.I. 02667760413) con sede in via piazzale Matteotti, 28 – (61121) Pesaro (PU)
              Italia oppure scrivendo a privacy@softwave.it.</p>

            <p>Inoltre potrà revocare il consenso alle società partner del Titolare del Trattamento semplicemente
              comunicando direttamente la sua decisione alla società terza stessa. Qualora lei ritenga che il
              trattamento dei dati personali forniti avvenga in violazione di quanto previsto dal GDPR ha il diritto di
              proporre reclamo all’Autorità Garante o di adire le opportune sedi giudiziarie (artt. 77 e 79 del
              GDPR).</p>

          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default BlogPostPage
