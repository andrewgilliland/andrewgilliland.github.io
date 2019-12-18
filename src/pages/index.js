import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="flex flex-col justify-center items-center h-screen bg-blue-grey-050">
      <h1 className="font-mono text-5xl tracking-tighter text-blue-grey-900">
        Bienvenidos
      </h1>
      <p className="text-lg text-magenta-800">Thanks for stopping by!</p>
    </section>

    <section className="bg-blue-grey-100 py-10 px-5">
      <div className=" mx-auto bg-blue-grey-100 max-w-3xl border-t-2 border-solid border-magenta-400">
        <h2 className="font-mono px-5 text-3xl bg-blue-grey-100">Articles</h2>

        <div className="p-5 bg-blue-grey-050 border-b-2 border-solid border-blue-grey-300 flex justify-between">
          <div className="flex">
            <svg
              className="h-5 w-5 fill-current self-center text-magenta-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z" />
            </svg>
            <div className="pl-5">
              <h3>The First Article</h3>
              <p>12/17/2019</p>
            </div>
          </div>
          <p className="h-8 px-2 py-1 text-orange-vivid-800 bg-orange-vivid-200 rounded">New</p>
        </div>
      </div>
    </section>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
