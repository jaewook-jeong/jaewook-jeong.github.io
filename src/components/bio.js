/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  console.log(social);
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="https://avatars.githubusercontent.com/u/56660101?v=4"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        Written by <strong>{author.name}</strong>
        <br/>
        문의사항이 있다면 언제든 연락주세요:)
      </p>
      <div className="author-socials">
        {social.github && (
          <a href={`https://github.com/${social.github}`}>GitHub</a>
        )}
        {social.velog && (
          <a href={`https://velog.io/${social.velog}`}>Velog</a>
        )}
      </div>
    </div>
  )
}

export default Bio
