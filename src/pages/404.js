import * as React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio";
const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <h1>404: Not Found</h1>
      <Image
        fixed={data.file.childImageSharp.fluid}
        style={{ width: '100%', aspectratio: 1 }}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
    query {
        file(relativePath: { eq: "404.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
    
`