// Imports
import * as React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import "../components/global.css"

// Index page component 
const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi! My name is Prachit Bhike and this is my personal website. I used React to build this.</p>
      <p>
      I currently work in technology investment banking at Qatalyst. I enjoy music, food and reading.
      </p>
      <br></br>
      <StaticImage
        alt="Prachit sitting at Golden Gate Park."
        src="../images/prachit_park.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Prachit Bhike</title>

export default IndexPage
