import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About page</h1>
      <p>This is the bio of the page</p>
      <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
