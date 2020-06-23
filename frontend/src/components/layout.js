import React from "react"
import PropTypes from "prop-types"
import MainNav from "../components/nav"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <MainNav />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout