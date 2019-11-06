import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

const BlogPostPage = () => (
  <Layout pageInfo={{ pageName: "blog-post" }}>
    <SEO title="Cookie Policy"/>
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Cookie Policy</h1>
      </Container>
    </Jumbotron>

    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p><b>RIFERIMENTI NORMATIVI</b><br/>Direttiva
              2002/58/CE - relativa al "trattamento dei dati personali e alla tutela della vita privata nel settore
              delle comunicazioni elettroniche".</p>
            <p>Regolamento (UE) 2016/679 del parlamento europeo e del consiglio
              del 27 aprile 2016 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati
              personali, nonché alla libera circolazione di tali dati e che abroga la direttiva 95/46/ce (Regolamento
              Generale sulla Protezione dei Dati).</p>
            <p><b>IL TITOLARE DEL TRATTAMENTO</b><br/>A seguito della
            consultazione di questo sito possono essere trattati dati relativi a persone identificate o
            identificabili. Il “Titolare” del loro trattamento è&nbsp;Wave s.r.l (P.I. 02667760413) con sede in via
            piazzale Matteotti, 28 – (61121) Pesaro (PU) Italia.</p><p><b>TIPI DI DATI TRATTATI</b><br/>Dati di
            navigazione</p><p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito
            web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è
            implicita nell’uso dei protocolli di comunicazione di Internet.</p><p>Si tratta di informazioni che non
            sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero,
            attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli
            utenti.</p><p>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer
            utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource
            Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la
            richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato
            della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo
            e all’ambiente informatico dell’utente.</p><p>Questi dati vengono utilizzati al solo fine di ricavare
            informazioni statistiche anonime sull’uso del sito e per controllarne il corretto funzionamento e vengono
            cancellati immediatamente dopo l’elaborazione. I dati potrebbero essere utilizzati per l’accertamento di
            responsabilità in caso di ipotetici reati informatici ai danni del sito: salva questa eventualità, allo
            stato i dati sui contatti web non persistono per più di sette giorni.</p><p><b>Dati forniti
            volontariamente dall’utente</b><br/>L’invio facoltativo, esplicito e volontario di dati personali da parte
            dell’utente nei form di registrazione presenti su questo sito o chiamando ad eventuali numeri di telefono
            riportati all’interno del sito, comporta la successiva acquisizione dei dati forniti dal mittente,
            necessari per l’erogazione del servizio o delle informazioni richieste.</p>&nbsp;<p><b>Dati di
            minori</b><br/>I Dati personali forniti e relativi a minori sono trattati esclusivamente quando ciò si
            renda necessario per garantire il corretto utilizzo del prodotto/servizio richiesto a seguito della
            stipulazione di un contratto di cui l’interessato è parte. Tali dati non saranno in alcun modo utilizzati
            per ulteriori scopi se non necessari a garantire il godimento di tutti i vantaggi del prodotto/servizio (a
            titolo esemplificativo e non esaustivo, potranno essere utilizzati al fine di garantire: la protezione
            della carta di credito del minore, la copertura assicurativi del minore; le prenotazioni di voli, hotel o
            crociere).</p><p><b>Dati anonimi o aggregati</b><br/>L’anonimizzazione si configura come un trattamento che
            ha lo scopo di impedire l’identificazione dell’interessato. I dati resi anonimi non rientrano nell’ambito
            di applicazione della legislazione in materia di protezione dei dati. Raccogliamo, elaboriamo e
            condividiamo dati aggregati come dati statistici o demografici per diverse finalità. I dati aggregati
            possono derivare &#8203;&#8203;da dati personali forniti dall’utente ma non sono considerati dati
            personali in quanto, come specificato, non consentono né direttamente né indirettamente l’identificazione
            dell’interessato. Tali dati saranno utilizzati anche al fine di migliorare la qualità dei nostri
            prodotti/servizi esistenti, sviluppare nuove funzionalità, nonché per ulteriori scopi di ricerca generali
            (ad esempio al fine di verificare la frequenza con cui si utilizza un determinato prodotto servizio; per
            calcolare la percentuale di utenti che accedono a una specifica funzione del sito Web etc.). Poiché tali
            dati non consentono l’individuazione di una persona fisica e non sono considerati personali, saranno
            condivisi con ulteriori terzi, controllati, controllate o partners.</p><p><b>COOKIES</b><br/>I cookies sono
            piccoli file di testo contenenti una certa quantità di informazioni scambiate tra un sito internet ed il
            terminale dell’utente (solitamente il browser). Essi sono principalmente utilizzati con lo scopo di far
            funzionare i siti web e farli operare in modo più efficiente, nonché al fine di fornire informazioni ai
            proprietari del sito stesso. I cookies possono essere sia di sessione che persistenti. I cookies di
            sessione rimangono memorizzati nel terminale per un breve periodo di tempo e sono eliminati non appena
            l'utente chiude il browser. Il loro utilizzo è strettamente limitato alla trasmissione di identificativi
            di sessione (costituiti da numeri casuali generati dal server) necessari per consentire l'esplorazione
            sicura ed efficiente del sito. I cookies persistenti invece rimangono archiviati nel terminale dell’utente
            fino ad una scadenza prestabilita. Questi, non essendo cancellati direttamente alla chiusura del browser,
            consentono di ricordare le scelte operate dall’utente sul proprio sito nonché di raccogliere informazioni
            circa le pagine del sito visitate dall’utente, la frequenza con la quale il sito viene visitato e per
            identificare il tracciato di navigazione degli utenti, al fine di migliorare l’esperienza sul presente
            sito. I cookies, di sessione o persistenti, possono essere infine di Prima parte o di Terza parte a
            seconda che il soggetto che installa i cookies sul terminale dell'utente sia lo stesso gestore del sito
            che l'utente sta visitando (si parlerà allora di cookies di Prima parte) oppure un soggetto diverso (si
            parlerà allora di cookies di Terza parte).</p><p><b>Cookie utilizzati dal presente sito</b><br/>I servizi
            contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati
            di traffico e servono a tener traccia del comportamento dell’Utente.</p><h2>STATISTICA</h2><p>I servizi
            contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati
            di traffico e servono a tener traccia del comportamento dell’Utente.</p><p><b>Google Analytics (Google
            Ireland Limited)</b><br/>Google Analytics è un servizio di analisi web fornito da Google Ireland Limited
            (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di
            questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google. Google
            potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network
            pubblicitario.</p><p>Dati Personali raccolti: Cookie; Dati di utilizzo.</p><p>Luogo del trattamento:
            Irlanda – <a href="https://policies.google.com/privacy">Privacy Policy</a> – <a
              href="https://tools.google.com/dlpage/gaoptout?hl=en">Opt Out</a>. Soggetto aderente al Privacy Shield.
          </p><h2>Visualizzazione di contenuti<br/>da piattaforme esterne</h2><p>Questo tipo di servizi permette di
            visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e
            di interagire con essi.</p><p>Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web
            relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.</p><p><b>Widget
            Video YouTube (Google Ireland Limited)</b><br/>YouTube è un servizio di visualizzazione di contenuti video
            gestito da Google Ireland Limited che permette a questa Applicazione di integrare tali contenuti
            all’interno delle proprie pagine.</p><p>Dati Personali raccolti: Cookie; Dati di utilizzo.</p><p>Luogo del
            trattamento: Irlanda – Privacy Policy. Soggetto aderente al Privacy Shield.</p><p><b>Gestione dei
            cookie</b><br/>Normalmente i browser permettono il controllo della maggior parte dei cookie tramite le
            impostazioni del browser stesso. Si ricorda tuttavia che la disabilitazione totale o parziale dei cookies
            c.d. tecnici può compromettere l’utilizzo delle funzionalità del sito. Ad ogni modo qualora l’utente non
            desideri ricevere alcun tipo di cookies sul proprio elaboratore, né da questo sito, né da altri, può
            elevare il livello di protezione privacy modificando le impostazioni di sicurezza del proprio browser:</p>
            <ul>
              <li>Mozilla Firefox:<br/>&nbsp;<a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                                                target="_blank" rel="noopener noreferrer" >https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a>
              </li>
              <li>Google Chrome:<br/>&nbsp;<a href="https://support.google.com/chrome/answer/95647?hl=it"
                                              target="_blank" rel="noopener noreferrer" >https://support.google.com/chrome/answer/95647?hl=it</a>
              </li>
              <li>Internet Explorer:<br/>&nbsp;<a
                href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies"
                target="_blank" rel="noopener noreferrer" >http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies</a></li>
              <li>Safari 6/7 Mavericks:<br/>&nbsp;<a
                href="https://support.apple.com/kb/PH17191?viewlocale=it_IT&amp;locale=it_IT"
                target="_blank" rel="noopener noreferrer" >https://support.apple.com/kb/PH17191?viewlocale=it_IT&amp;locale=it_IT</a></li>
              <li>Safari 8 Yosemite:<br/>&nbsp;<a
                href="https://support.apple.com/kb/PH19214?viewlocale=it_IT&amp;locale=it_IT"
                target="_blank" rel="noopener noreferrer" >https://support.apple.com/kb/PH19214?viewlocale=it_IT&amp;locale=it_IT</a></li>
              <li>Safari su iPhone, iPad, o iPod touch:<br/>&nbsp;<a href="https://support.apple.com/it-it/HT201265"
                                                                     target="_blank" rel="noopener noreferrer" >https://support.apple.com/it-it/HT201265</a>
              </li>
            </ul>
            &nbsp;<p><b>LINK AD ALTRI SITI WEB</b><br/>Questo sito potrebbe contenere link o riferimenti per l’accesso
            ad altri siti. Ti informiamo il Titolare del trattamento non controlla i cookie o le altre tecnologie di
            monitoraggio di tali siti web ai quali la presente Policy non si applica.</p>&nbsp;<p><b>FACOLTATIVITA’
            DEL CONFERIMENTO DEI DATI</b><br/>A parte quanto specificato per i dati di navigazione, l’utente è libero
            di fornire i dati propri personali. Tuttavia il loro mancato conferimento può comportare l’impossibilità
            di ottenere quanto richiesto.</p>&nbsp;<p><b>MODALITA’ DEL TRATTAMENTO</b><br/>I dati personali sono
            trattati, da personale autorizzato, anche mediante l’ausilio di strumenti automatizzati. Specifiche
            misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed
            accessi non autorizzati. Il Titolare ha adottato tutte le misure minime di sicurezza previste dalla
            legge ed ispirandosi ai principali standard internazionali, ha inoltre adottato misure di sicurezza
            ulteriori per ridurre al minimo i rischi afferenti la riservatezza, la disponibilità e l’integrità dei
            dati personali raccolti e trattati.</p>&nbsp;<p><b>LUOGO DI TRATTAMENTO DEI DATI e TEMPI DI
            CONSERVAZIONE</b><br/>I trattamenti connessi ai servizi web di questo sito hanno luogo presso la predetta
            sede del Titolare e sono curati solo da personale da questo espressamente autorizzato, oppure da
            eventuali fornitori terzi incaricati di occasionali operazioni di manutenzione, nominati Responsabili
            del trattamento ai sensi dell’articolo 28 del GDPR. I Dati raccolti saranno conservati – per ciascuna
            tipologia di dati trattati – esclusivamente per il tempo necessario ad adempiere alle specifiche
            finalità indicate nelle specifiche informative di sintesi visualizzate nelle pagine del sito e
            predisposte per particolari prodotti/servizi. I Dati saranno conservati in modo completo per tutto il
            periodo dell’esecuzione del contratto eventualmente stipulato con il Titolare o per tutta la durata del
            servizio/prodotto comunque erogato. Successivamente, i Dati saranno conservati per un periodo di dieci
            anni ai fini di ottemperare agli obblighi di legge e, tra questi, gli obblighi di cui all’art. 2220
            codice civile. L’eventuale ulteriore conservazione di Dati o parte dei Dati potrà essere disposta per
            far valere o difendere i propri diritti in ogni eventuale sede ed in particolare nelle sedi giudiziarie.
          </p>&nbsp;<p><b>CONDIVISIONE, COMUNICAZIONE E DIFFUSIONE DEI DATI</b><br/>I trattamenti connessi ai servizi
            web di questo sito hanno luogo presso la predetta sede del Titolare e sono curati solo da personale da
            questo espressamente autorizzato. I dati raccolti potranno essere condivisi, trasferiti o comunicati ad
            altre società per attività strettamente connesse e strumentali all’operatività del servizio, come la
            gestione del sistema informatico oppure ad eventuali fornitori terzi incaricati di occasionali
            operazioni di manutenzione. Nei predetti casi, il Titolare provvede a nominare tali soggetti terzi
            Responsabili del trattamento ai sensi dell’articolo 28 del GDPR. Al di fuori di questi casi, i dati
            personali non saranno comunicati a terzi salvo previsione contrattuale o di legge, ovvero salvo
            specifico consenso richiesto all’interessato. In questo senso, i dati personali potrebbero essere
            trasmessi a terze parti, ma solo ed esclusivamente nel caso in cui:<br/>vi sia consenso esplicito a
            condividere i dati con terze parti;<br/>vi sia la necessità di condividere con terzi le informazioni al
            fine di prestare il servizio richiesto;<br/>ciò sia necessario per adempiere a richieste
            dell'Autorità Giudiziaria o di Pubblica Sicurezza. Nessun dato derivante dal servizio web viene
            diffuso.</p>&nbsp;<p><b>Trasferimento dei dati personali extra UE</b><br/>Nei casi in cui si renda
            necessario il trasferimento, l’elaborazione o l’accesso ai dati personali da parte di soggetti che hanno
            sede fuori dall’Unione Europea, il Titolare ottiene le necessarie garanzie affinché il trasferimento dei
            Dati sia effettuato conformemente a quanto prescritto al Capo V del GDPR (verificando ad esempio
            l’eventuale decisione di adeguatezza prevista dall’Autorità Garante a protezione dei dati personali,
            verificando l’eventuale certificazione del soggetto terzo al Privacy Shield o, in alternativa,
            stipulando specifiche clausole contrattuali standard per la protezione dei dati).</p>&nbsp;<p><b>DIRITTI
            DEGLI INTERESSATI</b><br/>La normativa a protezione dei dati personali prevede espressamente alcuni
            diritti in capo ai soggetti cui dati si riferiscono (c.d. interessato). In particolare, ai sensi degli
            articoli 15 e ss. del Regolamento (UE) 2016/679, ciascun interessato ha il diritto di ottenere la
            conferma dell’esistenza o meno di dati che lo riguardano, di ottenere l’indicazione dell’origine e delle
            finalità e modalità del trattamento, l’aggiornamento, la rettificazione, l’integrazione dei dati nonché
            la loro cancellazione qualora trattati in violazione di legge o qualora sussista uno dei motivi
            specificati dall’articolo 17 del Regolamento (UE) 2016/679. Qualora lei ritenga che il trattamento dei
            dati personali forniti avvenga in violazione di quanto previsto dal GDPR ha il diritto di proporre
            reclamo all’Autorità Garante o di adire le opportune sedi giudiziarie (artt. 77 e 79 del GDPR).
          </p>&nbsp;<p><b>MODIFICHE ALLE PRESENTI POLITICHE SULLA PRIVACY</b><br/>Il Titolare verifica periodicamente
            la propria politica relativa alla privacy e alla sicurezza e, se del caso, la rivede in relazione alle
            modifiche normative, organizzative o dettate dall’evoluzione tecnologica. In caso di modifica delle
            politiche, la nuova versione sarà pubblicata in questa pagina del sito.</p>&nbsp;<p><b>DOMANDE, RECLAMI,
            SUGGERIMENTI E ESERCIZIO DEI DIRITTI</b><br/>Chiunque fosse interessato a maggiori informazioni, a
            contribuire con propri suggerimenti o avanzare reclami o contestazioni in merito alle politiche privacy,
            sul modo in cui la nostra Società tratta i dati personali, nonché per far valere i propri diritti
            previsti dalla normativa in materia di protezione dei dati personali, può rivolgersi al Titolare del
            trattamento scrivendo a Wave s.r.l (P.I. 02667760413) con sede in via piazzale Matteotti, 28 – (61121)
            Pesaro (PU) Italia, oppure inviando una email a <a
              href="mailto: privacy@softwave.it">privacy@softwave.it</a>.</p>&nbsp;<p><b>LEGGE E
            GIURISDIZIONE</b><br/>L'interpretazione e l'esecuzione di queste condizioni sono regolate dalla legge
            italiana.&nbsp;Il Foro di Pesaro sarà competente in via esclusiva per qualsiasi controversia comunque
            connessa a queste condizioni. Il Titolare si riserva di ottenere rimedi urgenti presso qualunque Corte
            anche all'estero, per proteggere i propri interessi e far rispettare i propri diritti.</p>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default BlogPostPage
