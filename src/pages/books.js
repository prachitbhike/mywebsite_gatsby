import * as React from 'react'
import Layout from '../components/layout'
import "../components/global.css"

const BooksPage = () => {
  return (
    <Layout pageTitle="Writing">
      <p>These are my favorite books.</p>
    </Layout>
  )
}

export const Head = () => <title>Books</title>

export default BooksPage