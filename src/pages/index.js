import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import "../components/Global.css"

const IndexPage = () => {
  return (
    <Layout>
      <p>Hi! My name is Prachit Bhike and this is my personal website. I used React to build this.</p>
      <p>
      I currently work in technology investment banking at Qatalyst. I enjoy music, food and reading.
      </p>
      <br></br>
      <StaticImage
        alt="Prachit as a ."
        src="../images/prachit_baby.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Prachit Bhike</title>

export default IndexPage
