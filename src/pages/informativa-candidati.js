import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

const PrivacyCandidatePage = () => (
  <Layout pageInfo={{ pageName: "informativa-candidati" }}>
    <SEO title="Informativa candidati"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Informativa sul trattamento dei dati personali dei candidati </h1>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p>Ai sensi dell’art. 13 del D.lgs. 196/2003 (“Codice Privacy”), La informiamo che i dati personali forniti
              nella presente sezione a Wave SRL, sede di Pesaro (PU) (“Società”), saranno trattati esclusivamente per
              valutare la Sua candidatura ai fini di un’eventuale futura instaurazione di un rapporto di lavoro con la
              Società.</p>

            <p>Si segnala che la presente informativa contiene anche tutte le informazioni richieste dal Regolamento UE
              2016/679 (“RGPD”), il quale sarà applicabile a partire dal 25 maggio 2018, salve tutte le integrazioni e
              modifiche che potrebbero rendersi necessarie a seguito di interventi legislativi nazionali ed europei
              nonché all’emanazione di provvedimenti e linee guida da parte del Garante per la Protezione dei Dati
              Personali e altre autorità nazionali ed europee in campo privacy.</p>

            <h3>1. Titolare, responsabile e comunicazioni privacy</h3>
            <p>Titolare del trattamento è Wave SRL, con sede in Via degli Abeti 24, 61122 - Pesaro (PU), rappresentata
              dal Legale Rappresentante. Il Responsabile del trattamento è il Direttore delle Risorse Umane. Il Titolare
              ed il Responsabile del trattamento potranno essere contattati via email all’indirizzo
              <a href="support@wavecode.it" target="_blank">support@wavecode.it</a>.</p>

            <h3>2. Finalità del trattamento</h3>
            <p>I suoi dati personali, liberamente comunicati e da noi acquisiti in ragione del rapporto di lavoro
              instauratosi con la nostra società, saranno trattati in modo lecito e secondo correttezza esclusivamente
              per finalità connesse o strumentali allo svolgimento dell’attività di ricerca e selezione dei
              candidati.</p>
            <p>La informiamo inoltre che i dati personali a Lei riferibili saranno trattati nel rispetto delle modalità
              indicate nell’art. 11 del D.Lgs. n° 196/2003 il quale prevede, tra l’altro, che i dati stessi siano
              trattati in modo lecito e secondo correttezza, raccolti e registrati per scopi determinati, espliciti e
              legittimi; esatti e, se necessario, aggiornati; pertinenti, completi e non eccedenti rispetto alle
              finalità del trattamento.</p>

            <h3>3. Base giuridica del trattamento</h3>
            <p>La base giuridica del trattamento dei Vs. dati personali si fonda sulle previsioni di cui all’art. 24
              comma i) bis del Codice Privacy (dati contenuti nei curricula) e all’art. 6 comma 1.b) del RGPD
              all’esecuzione di misure precontrattuali adottate su Sua richiesta. Sarà comunque richiesto il Suo
              consenso espresso.</p>

            <h3>4. Natura obbligatoria o facoltativa del conferimento dei dati e conseguenze di un eventuale rifiuto a
              rispondere</h3>
            <p>Ai sensi dell’art. 13, c. 1 c) del Codice Privacy, nonché dell’art. 13 c. 2 e) del RGPD, la informiamo
              che il conferimento dei dati personali è obbligatorio. Il Suo rifiuto a fornirli o la mancanza di consenso
              precluderebbe del tutto alla Società la possibilità di valutare la Sua candidatura.</p>

            <h3>5. Tipologia di dati oggetto di trattamento</h3>
            <p>Nella fase di ricerca e selezione del personale, la Società non ha di regola necessità di raccogliere
              dati "particolarmente sensibili" (tali da intendersi quelli idonei a rivelare, a titolo esemplificativo,
              l’origine razziale ed etnica, le convinzioni religiose, filosofiche o di altro genere, le opinioni
              politiche, l’adesione a partiti, sindacati, associazioni od organizzazioni a carattere religioso,
              filosofico, politico o sindacale, nonché i dati personali idonei a rivelare lo stato di salute e la vita
              sessuale), pertanto, Le si chiede di inserire nel curriculum solo i dati necessari a valutare il Suo
              profilo e di astenersi dall’indicare tali informazioni, salvo qualora ritenga che le stesse siano
              necessarie per un miglior inquadramento della Sua posizione, in particolare in relazione all’appartenenza
              a categorie protette. In questo caso, è necessario che Lei esprima il Suo consenso inserendo in calce al
              Suo curriculum la seguente frase: "Avendo preso visione dell’informativa di Wave SRL, sede di Pesaro (PU),
              reperibile sul sito internet www.wavecode.it, autorizzo espressamente il trattamento dei miei dati
              particolarmente sensibili per le finalità di selezione ivi indicate". In assenza di tale autorizzazione,
              necessaria a riconoscerLe anche i conseguenti benefici di Legge ove Lei appartenga a categorie protette,
              la Sua candidatura non potrà essere valutata e le informazioni verranno immediatamente cancellate.</p>

            <h3>6. Modalità del trattamento</h3>
            <p>Il trattamento dei dati personali avverrà mediante strumenti manuali, informatici o telematici, idonei
              comunque a garantirne la sicurezza e la riservatezza.</p>

            <h3>7. Esistenza di un processo decisionale automatizzato</h3>
            <p>Non è presente un processo decisionale automatizzato. I dati non saranno oggetto di profilazione.</p>

            <h3>8. Periodo di conservazione</h3>
            <p>I dati verranno conservati per un periodo massimo di cinque anni dall’invio del Suo curriculum ovvero
              dalla data dell’ultimo aggiornamento dello stesso da Lei comunicatoci.</p>

            <h3>9. Possibili destinatari e categorie di destinatari dei suoi dati personali</h3>
            <p>I dati potranno essere resi noti a dipendenti e collaboratori del Titolare che, in qualità di Incaricati
              del trattamento, operano nel Reparto Risorse Umane e/o nei reparti interessati alla Sua candidatura e
              potranno trattare i Suoi dati nel rispetto delle istruzioni impartite dalla Società.</p>

            <p>Inoltre i dati potranno essere comunicati ad altre Società del Gruppo Wave, per la partecipazione a
              selezioni. Le Società che fanno parte del Gruppo Wave sono identificate nel sito <a
                href="https://www.wavecode.it" target="_blank">ww.wavecode.it</a>.</p>

            <p>I Suoi dati personali potranno essere trattati da soggetti terzi, di cui la Società si avvale ai fini
              della valutazione e della selezione dei candidati.</p>

            <p>Tali soggetti potranno, a seconda dei casi, operare in qualità di Titolari del trattamento autonomi o di
              Responsabili del trattamento appositamente nominati.</p>

            <h3>10. Intenzione del Titolare del trattamento dati personali</h3>
            <p>Il Titolare del trattamento non trasferirà i Vs. dati personali ad un paese terzo o ad una organizzazione
              internazionale.</p>

            <h3>11. Diritti dell'interessato</h3>
            <p>Lei, in qualità di Interessato, avrà la possibilità di esercitare tutti i diritti contemplati dal
              RGPD nei confronti della Società, relativamente alle attività di trattamento che riguardino i Suoi dati
              personali. In particolare, spettano all’Interessato:</p>

            <p>a) Il Diritto di Accesso (Art. 15 RGPD), ai sensi del quale l’interessato può ottenere dalla Società la
              conferma che sia o meno in corso un trattamento di dati personali che lo riguardano, nonché l’accesso alle
              informazioni sulle finalità del trattamento, sulle categorie dei dati personali trattati, sui destinatari
              o
              le categorie di destinatari a cui i dati personali sono o saranno comunicati, sul periodo di conservazione
              previsto, sull’esistenza del diritto di richiedere la rettifica, la cancellazione o la limitazione del
              trattamento, sul diritto di proporre reclamo ad un’autorità di controllo, sull’esistenza di un processo
              decisionale automatizzato, compresa la profilazione;</p>
            <p>b) Il Diritto di Rettifica (Art. 16 RGPD), ai sensi del quale l’interessato può ottenere dalla Società la
              rettifica dei dati personali inesatti che lo riguardano, o l’integrazione di dati personali
              incompleti;</p>
            <p>c) Il Diritto alla Cancellazione (Art. 17 RGPD), ai sensi del quale l’interessato può ottenere dalla
              Società la cancellazione dei dati personali che lo riguardano, qualora:</p>
            <ul>
              <li>i. L’Interessato revochi il consenso rilasciato per il trattamento dei dati personali;</li>
              <li>ii. I dati personali non siano più necessari rispetto alle finalità per le quali sono stati raccolti;
              </li>
              <li>iii. I dati personali sono stati trattati illecitamente;</li>
              <li>iv. I dati personali devono essere cancellati per adempiere un obbligo legale;</li>
            </ul>
            <p>d) Il Diritto di Limitazione di Trattamento (Art. 18 RGPD), ai sensi del quale l’interessato può ottenere
              la limitazione del trattamento di dati personali che lo riguardano qualora:</p>
            <ul>
              <li>i. L’interessato contesta l’esattezza dei dati personali, per il periodo necessario al titolare del
                trattamento per verificare l’esattezza di tali dati personali;
              </li>
              <li>ii. Il trattamento è illecito e l’interessato si oppone alla cancellazione dei dati personali e chiede
                invece che ne sia limitato l’utilizzo;
              </li>
              <li>iii. Benché la Società non ne abbia più bisogno ai fini del trattamento, i dati personali sono
                necessari
                all’interessato per l’accertamento, l’esercizio o la difesa di un diritto in sede giudiziaria;
              </li>
            </ul>
            <p>e) Il Diritto alla Portabilità dei Dati (Art. 20 RGPD), ai sensi del quale l’interessato ha il diritto di
              ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali
              che
              lo riguardano forniti alla Società, e ha il diritto di trasmettere tali dati ad un altro titolare del
              trattamento senza impedimenti da parte della Società, qualora il trattamento sia effettuato con mezzi
              automatizzati. Se tecnicamente fattibile, l’interessato ha inoltre il diritto di ottenere la trasmissione
              diretta dei propri dati personali dalla Società ad altro titolare del trattamento;</p>
            <p>f) Diritto alla revoca del consenso fornito per il trattamento dei dati sensibili. I diritti di cui sopra
              potranno essere esercitati inviando una richiesta scritta o via e-mail alla Società utilizzando i contatti
              forniti al punto 1. della presente informativa.</p>
            <p>Oltre ai diritti di cui sopra, spetta sempre all’Interessato il diritto di proporre reclamo per qualsiasi
              questione riguardante il trattamento dei propri dati personali dinanzi all’Autorità Garante per la
              Protezione dei Dati Personali.</p>

          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default PrivacyCandidatePage
