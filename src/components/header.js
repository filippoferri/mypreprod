//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MainNavbar from "./navBar"

const Header = ({ siteTitle, pageInfo }) => (
  <header>
      <MainNavbar siteTitle={siteTitle} pageInfo={pageInfo}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
