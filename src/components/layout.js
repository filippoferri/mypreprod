/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

//import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

        <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo}/>

        <main>{children}</main>

        <Footer/>

      </>
    )}
  />
)

export default Layout
