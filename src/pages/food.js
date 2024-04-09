import * as React from 'react'
import Layout from '../components/Layout'
import "../components/Global.css"

const FoodPage = () => {
  return (
    <Layout>
      <p>This is my food.</p>
    </Layout>
  )
}

export const Head = () => <title>Food</title>

export default FoodPage