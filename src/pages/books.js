import * as React from 'react'
import Layout from '../components/layout'

const BooksPage = () => {
  return (
    <Layout pageTitle="Writing">
      <p>This are my favorite books.</p>
    </Layout>
  )
}

export const Head = () => <title>Books</title>

export default BooksPage