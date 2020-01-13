import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import Container from "../components/Container"

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <section className="bg-blue-grey-050 py-16 px-5">
      <Container>
        <div className="bg-blue-grey-100 border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
          <h2 className="px-5 text-3xl bg-blue-grey-100 tracking-tight">
            Articles
          </h2>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Article
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              slug={node.fields.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  </Layout>
)

export default ArticlesPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
