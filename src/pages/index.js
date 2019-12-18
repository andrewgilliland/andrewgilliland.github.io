import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section className="flex flex-col justify-center items-center h-screen bg-blue-grey-050">
      <h1 className="font-mono text-5xl tracking-tighter text-blue-grey-900">
        Bienvenidos
      </h1>
      <p className="text-lg font-semibold text-magenta-800">
        Thanks for stopping by!
      </p>
    </section>

    <section>
      <div>
        <h2>About Andrew</h2>
      </div>
    </section>

    <section className="bg-blue-grey-100 py-10 px-5">
      <div className=" mx-auto bg-blue-grey-100 max-w-3xl border-t-2 border-solid border-magenta-400">
        <h2 className="font-mono px-5 text-3xl bg-blue-grey-100">Articles</h2>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            slug={node.fields.slug}
          />
        ))}
      </div>
    </section>

    <section>
      <h2>Contact</h2>
    </section>
  </Layout>
)

export default IndexPage

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
