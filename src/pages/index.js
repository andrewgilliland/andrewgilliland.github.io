import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"

import { MdEmail } from "react-icons/md"
import { FaGithub, FaTwitter } from "react-icons/fa"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section className="py-10 flex flex-col justify-around items-center bg-blue-grey-050">
      <h1 className="font-brand font-medium text-5xl tracking-tight text-blue-grey-900 uppercase">
        Bienvenidos
      </h1>
      <div className="mt-10 mx-8 p-3 bg-magenta-050 rounded-lg shadow-lg text-center leading-loose">
        <p className="text-lg font-semibold text-magenta-800">
          Thanks for stopping by!
        </p>
        <p className="max-w-20em text-magenta-800 italic">
          I'm Andrew, I am a freelance web developer. On this site I am sharing
          some articles about JavaScript, Reactjs, Node.js and web development.
          Check them out while you are here!
        </p>
      </div>
    </section>

    <section className="-mt-16 bg-blue-grey-200 py-16 px-5">
      <div className=" mx-auto bg-blue-grey-100 max-w-3xl border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
        <h2 className="font-brand px-5 text-3xl bg-blue-grey-100 tracking-tight">
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

      <div className="mt-10 mx-auto bg-blue-grey-100 max-w-3xl border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
        <h2 className="font-brand px-5 text-3xl bg-blue-grey-100 tracking-tight">
          Some Projects
        </h2>
        <div className="bg-blue-grey-050">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>
      </div>

      <div className="mt-10 mx-auto bg-blue-grey-100 max-w-3xl border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
        <h2 className="font-brand px-5 text-3xl bg-blue-grey-100 tracking-tight">
          Get In Touch
        </h2>
        <div className="bg-blue-grey-050">
          <div className="py-3 flex items-center">
            <MdEmail className="ml-5 text-magenta-700" size="40" />
            <address>
              <a
                className="ml-3 text-magenta-500 font-bold hover:text-magenta-200 not-italic"
                href="mailto:andrewpgilliland@gmail.com"
              >
                andrewpgilliland@gmail.com
              </a>
            </address>
          </div>
          <div className="py-3 flex items-center">
            <FaGithub className="ml-5 text-magenta-700" size="40" />
            <a
              className="ml-3 text-magenta-500 font-bold hover:text-magenta-200"
              href="https://github.com/andrewgilliland"
            >
              andrewgilliland
            </a>
          </div>
          <div className="py-3 flex items-center">
            <FaTwitter className="ml-5 text-magenta-700" size="40" />
            <a
              className="ml-3 text-magenta-500 font-bold hover:text-magenta-200"
              href="https://twitter.com/gilliland_andy"
            >
              @gilliland_andy
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-blue-grey-050"></section>
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
