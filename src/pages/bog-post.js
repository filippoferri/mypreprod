import React from "react"
//import { Link } from "gatsby"

import { IoIosQuote } from "react-icons/io"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.jpg"
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap"

const BlogPostPage = () => (
  <Layout pageInfo={{ pageName: "blog-post" }}>
    <SEO title="Chi siamo" />
    <Jumbotron fluid className="is-h-400 d-flex align-items-center">

      <div className="is-bg-section" style={{ backgroundImage: `url(${Hero})` }}></div>

      <Container style={{ zIndex: "2" }}>
        <h1 className="text-center mt-5">Chi siamo</h1>
      </Container>
    </Jumbotron>

    <section className="padding-top-small padding-bottom-small">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">Semplifica il tuo lavoro con soluzioni ad hoc</h2>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <blockquote>
              <IoIosQuote size={40}/>
              Together let us desire, conceive, and create the new structure of the future, which will embrace
              architecture and sculpture and painting in one unity and which will one day rise toward Heaven from the
              hands of a million workers like the crystal symbol of a new faith.
              <cite>Paolo Bianchi - <span>Project Manager</span></cite>
            </blockquote>
          </Col>
          <Col>
            <div>
              <Image className="mb-4" src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="title" fluid/>
              <h3 className="h5 mb-3">La nostra esperienza a stretto contatto con le necessità e esigenze degli agenti
                di viaggio</h3>
            </div>
            <div className="d-flex">
              <div className="mr-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
              <div className="ml-3 flex-column">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>




    <section className="padding-bottom-huge padding-top-small">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p>People are wanting to fly to international destinations for vacations but planning a holiday getaway can easily turn into a stressful venture when the matter of costs comes up. However, airfare can be very expensive. Air fare by itself can kill the excitement. And when people already factor in accommodations, food, and shopping, or any other would just give up and stay home.If you think on taking a vacation that requires any sort of wide planning, such as out of the country or worldwide even to a popular destination in a different state, it is probably going to be necessary for you to enlist the services of a travel agency.</p>

            <p>Try to find out which travel agency you are considering is helpful with. Agencies with more extensive (think global) affiliations are more likely to be able to get you lower prices and added favors for your vacations. Keep in mind, however, that just because they are affiliated with a large group does not mean that the agency itself has to be bigger. Common knowledge would suggest that the bigger the agency, the easier it is to negotiate lower prices.</p>

            <p>At last, ask for references from the agency of both clients and dealers. Clients of course, are people like your self who have used the agency’s services to visit on vacations earlier. Dealers are the people with whom the agency deals in order to purchase items such as hotel rooms and airline tickets, and will often have a clearer thought of how the agency operates and where or not they can do all that they claim as far as cost cutting and favors. So, how does lower cost or cheap air travel works exactly simple a solution.Tavelhouseuk provide cheap airline tickets for last minute travel within Europe , Africa Canada , Hawaii, Asia , Mexico , South Pacific and South Central America.Over 24 year of experience in last minute cheap provide travel industry brings you the best possible discount available for all your travel, like weather traveling on Coach (Economy class), First class or Biz (Business class). No Advance Purchase Required on the most Fares.Buy online and save up to 45% on all your Last Minute Domestic air travel. We provide Consolidator fares with up to 70% savings on airline tickets for cheap international flights, generally the best overseas travel bargain available.Plan your Air Travel with Confidence Travelhouseuk guarantees Low Prices.</p>

          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default BlogPostPage
