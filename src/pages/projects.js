import * as React from 'react'
import Layout from '../components/layout'
import "../components/global.css"

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>This is my projects.</p>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage