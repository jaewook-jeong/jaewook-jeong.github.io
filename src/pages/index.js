import * as React from "react"
import { graphql, Link } from "gatsby";
import uniq from "lodash/uniq";
import styled from "styled-components";

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Category } from "../components/category";
import { useCategory } from "../hooks/useCategory";

const Tag = styled.span`
  padding: 1px 7px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: #c69b69;
  color: #fefefe;
  font-weight: 500;
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [category, selectCategory] = useCategory();
  const categories = React.useMemo(
    () => uniq(posts.map((node) => {
      return node?.frontmatter?.category
    })),
    [posts]
  )
  const filteredPosts = React.useMemo(() =>
    posts
      .filter(
        (node) =>
           category === 'All' ||
           node?.frontmatter?.category === category
    ), [category, posts]);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
         준비 중입니다. 조금만 기다려주세요.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Category
        categories={categories}
        category={category}
        selectCategory={selectCategory}
      />
      <ol style={{ listStyle: `none` }}>
        {filteredPosts?.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Tag>{post.frontmatter.category}</Tag>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { nin: [null, "draft"] } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
