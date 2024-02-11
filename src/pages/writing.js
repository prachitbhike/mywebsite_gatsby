import * as React from 'react'
import Layout from '../components/layout'
import "../components/global.css"

const WritingPage = () => {
  return (
    <Layout pageTitle="Writing">
      <p>This is my writing.</p>
    </Layout>
  )
}

export const Head = () => <title>Writing</title>

export default WritingPage