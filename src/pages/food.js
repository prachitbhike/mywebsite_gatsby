import * as React from 'react'
import Layout from '../components/layout'

const FoodPage = () => {
  return (
    <Layout pageTitle="Food">
      <p>This is my food.</p>
    </Layout>
  )
}

export const Head = () => <title>Food</title>

export default FoodPage