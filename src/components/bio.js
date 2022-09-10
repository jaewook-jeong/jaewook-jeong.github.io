/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    display: flex;
  }
  
  .author-socials {
    gap: 10px;
    color: #1a202c;
  }
  
  a {
    
    :hover {
      color: #0077aa;
    }
  }
`;


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
            velog
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <StyledBio>
      <div>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="https://avatars.githubusercontent.com/u/56660101?v=4"
          width={75}
          height={75}
          quality={95}
          alt="Profile picture"
        />
        <p>
          Written by <strong>{author.name}</strong>
          <br/>
          문의사항이 있다면 언제든 연락주세요:)
          <br/>
          <a href="https://www.nextunicorn.kr">@nextunicorn</a>
        </p>
      </div>
      <div className="author-socials">
        {social.github && (
          <a href={`https://github.com/${social.github}`}>GitHub</a>
        )}
        {social.velog && (
          <a href={`https://velog.io/${social.velog}`}>Velog</a>
        )}
      </div>
    </StyledBio>
  )
}

export default Bio
