import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, JAMstack peeps!</h1>
    <p>My name is Andy Cary.</p>
    <p>I am an IT Systems Analyst at Stanford University.</p>
    <p>I want to learn more and build something cool and useful at the hackathon!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
