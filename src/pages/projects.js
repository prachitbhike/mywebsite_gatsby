import * as React from 'react'
import Layout from '../components/Layout'
import "../components/Global.css"

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>These are my projects.</p>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage