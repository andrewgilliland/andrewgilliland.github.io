import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import Container from "../components/Container"

import { MdEmail } from "react-icons/md"
import { FaGithub, FaTwitter } from "react-icons/fa"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section className="py-10 flex flex-col justify-around items-center bg-blue-grey-050">
      <h1
        className="font-medium text-5xl tracking-tight text-blue-grey-900 uppercase"
        style={{
          textShadow: `1px 1px 0px #AD4BB8, 2px 2px 0px #BB61C7, 3px 3px 0px #CE80D9, 4px 4px 0px #ECBDF2, 5px 5px 0px #F5E1F7`,
        }}
      >
        <span style={{ width: "5px", backgroundColor: "#AD4BB8" }}> </span>
        Bienvenidos
      </h1>
      <div className="mt-10 mx-8 p-3 bg-magenta-050 rounded-lg shadow-lg text-center leading-loose">
        <p className="text-lg font-semibold text-magenta-800">
          Thanks for stopping by!
        </p>
        <p className="max-w-20em text-magenta-800 italic">
          I'm Andrew, I am a freelance web developer. On this site I am sharing
          some articles about JavaScript, CSS, React, Node.js and web
          development. Check them out while you are here!
        </p>
      </div>
    </section>

    <section className="-mt-16 bg-blue-grey-200 py-16 px-5">
      <Container>
        <div className="bg-blue-grey-100 border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
          <h2 className="px-5 text-3xl bg-blue-grey-100 tracking-tight">
            Articles
          </h2>

          {data.allMdx.edges.map(({ node }) => (
            <Article
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              slug={node.fields.slug}
            />
          ))}
        </div>

        {/* <div className="mt-10 bg-blue-grey-100 border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
          <h2 className="px-5 text-3xl bg-blue-grey-100 tracking-tight">
            Some Projects
          </h2>
          <div className="bg-blue-grey-050">
            <div className="p-5 bg-blue-grey-050 flex justify-between items-center pt-10">
              <div className="flex">
                <div className="ml-3">
                  <a
                    className="text-magenta-500 border-2 border-magenta-200 px-4 py-2 rounded-lg font-semibold hover:bg-magenta-050 focus:bg-magenta-050"
                    href="https://natours-andrew.herokuapp.com/"
                  >
                    Natours
                  </a>
                  <p className="text-blue-grey-600 mt-6">
                    Natours is a full stack application that allows users to
                    view and book tours. The primary technologies used are
                    Node.js, Express, and MongoDB. This was built along with the
                    Udemy Course{" "}
                    <a
                      href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                      className="font-sans text-magenta-500 font-semibold hover:underline"
                    >
                      Node.js, Express, MongoDB & More: The Complete Bootcamp
                    </a>{" "}
                    by Jonas Schmedtmann.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-grey-050 flex justify-between items-center">
              <div className="flex">
                <div className="ml-3">
                  <button className="text-magenta-500 border-2 border-magenta-200 px-4 py-2 rounded-lg font-semibold hover:bg-magenta-050 focus:bg-magenta-050">
                    React Colors
                  </button>
                  <p className="text-blue-grey-600 mt-4">
                    React colors is a front end application that allows you to
                    create, display and update and delete color palettes. The
                    primary technology used is React with Create React App. This
                    was built along with the Udemy Course{" "}
                    <a
                      href="https://www.udemy.com/course/modern-react-bootcamp/"
                      className="font-sans text-magenta-500 font-semibold hover:underline"
                    >
                      The Modern React Bootcamp
                    </a>{" "}
                    by Colt Steele.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-grey-050 flex justify-between items-center">
              <div className="flex">
                <div className="ml-3">
                  <a
                    className="text-magenta-500 border-2 border-magenta-200 px-4 py-2 rounded-lg font-semibold hover:bg-magenta-050 focus:bg-magenta-050"
                    href="https://desolate-hollows-99733.herokuapp.com/"
                  >
                    YelpCamp
                  </a>
                  <p className="text-blue-grey-600 mt-4">
                    YelpCamp is a full stack application that allows users to
                    create, view, update and review campgrounds. The primary
                    technologies used are Bootstrap, Node.js, Express, and
                    MongoDB. This was built along with the Udemy Course{" "}
                    <a
                      href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                      className="font-sans text-magenta-500 font-semibold hover:underline"
                    >
                      The Web Developer Bootcamp
                    </a>{" "}
                    by Colt Steele.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="mt-10 bg-blue-grey-100 border-t-4 border-solid border-magenta-400 shadow-lg rounded-b-lg overflow-hidden">
          <h2 className="px-5 text-3xl bg-blue-grey-100 tracking-tight">
            Get In Touch
          </h2>
          <div className="bg-blue-grey-050 px-2 py-4">
            <div className="py-3 flex flex-col sm:flex-row items-center">
              <MdEmail className="ml-5 text-magenta-700" size="40" />
              <address>
                <a
                  className="sm:ml-3 text-magenta-500 font-bold hover:text-magenta-200 not-italic"
                  href="mailto:andrewpgilliland@gmail.com"
                >
                  Email
                </a>
              </address>
            </div>
            <div className="py-3 flex flex-col sm:flex-row items-center">
              <FaGithub className="ml-5 text-magenta-700" size="40" />
              <a
                className="sm:ml-3 text-magenta-500 font-bold hover:text-magenta-200"
                href="https://github.com/andrewgilliland"
              >
                andrewgilliland
              </a>
            </div>
            <div className="py-3 flex flex-col sm:flex-row items-center">
              <FaTwitter className="ml-5 text-magenta-700" size="40" />
              <a
                className="sm:ml-3 text-magenta-500 font-bold hover:text-magenta-200"
                href="https://twitter.com/gilliland_andy"
              >
                @gilliland_andy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="bg-blue-grey-050"></section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
