import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="mx-8 flex flex-col items-center">
        <div>
          <h1 className="mt-10 font-brand text-blue-grey-800 text-3xl sm:text-4xl">
            {post.frontmatter.title}
          </h1>
          <h2 className="text-blue-grey-600">{post.frontmatter.date}</h2>

          <div
            className="my-10 font-serif leading-relaxed text-blue-grey-600 max-w-35em sm:text-lg"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
