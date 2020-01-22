import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.mdx

  return (
    <Layout>
      <div className="mx-5 flex flex-col items-center">
        <div className="max-w-20em sm:max-w-35em">
          <h1 className="mt-10 text-blue-grey-800 text-2xl sm:text-4xl tracking-tight">
            {post.frontmatter.title}
          </h1>
          <h2 className="text-blue-grey-600">{post.frontmatter.date}</h2>

          <article
            className="my-10 font-serif leading-relaxed text-blue-grey-600 text-sm sm:text-lg"
            // dangerouslySetInnerHTML={{ __html: post.html }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
