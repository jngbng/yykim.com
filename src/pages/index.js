import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>걓!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://www.linkedin.com/in/youyoung-kim-12692892">Linkedin Page</a> <br />
  </Layout>
)

export default IndexPage
