import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

import { rhythm } from '../utils/typography'
import Seo from "../components/seo";
import "../styles/about.scss";

export default () => {
  const data = useStaticQuery(graphql`
      query AboutQuery {
          site {
              siteMetadata {
                  resume {
                      title
                      description
                  }
              }
          }
          allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
              edges {
                  node {
                      id
                      excerpt(pruneLength: 160)
                      html
                      frontmatter {
                          title
                          date(formatString: "MMMM DD, YYYY")
                      }
                  }
              }
          }
      }
  `)
  const resumeData = data.site.siteMetadata.resume
  const resumes = data.allMarkdownRemark.edges
  const resume = resumes[0].node;
  return (
    <>
      <Seo title={resumeData.title} description={resumeData.description} />
      <div
        className="about"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
            3 / 4
          )}`,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: resume.html }} />
      </div>
    </>
  )
}