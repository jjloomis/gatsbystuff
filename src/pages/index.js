import React from "react"

import Layout from "../components/Layout"
import Listing from "../components/listing"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Listing />
  </Layout>
)

export default IndexPage
