import React from "react"
import BlogNavbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div>
      <BlogNavbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
