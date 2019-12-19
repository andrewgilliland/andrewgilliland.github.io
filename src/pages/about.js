import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import photo from "../images/photo-1.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="bg-blue-grey-050 py-10">

      <div className="max-w-lg mx-5 mt-5 shadow-lg rounded-lg">
        <div className="p-5 flex justify-between items-center bg-magenta-500 rounded-t-lg">
          <h1 className="font-brand font-medium text-2xl text-blue-grey-050 self-end">
            About me
          </h1>
          <img className="rounded-full h-16" src={photo} alt="" />
        </div>
        <p className="font-serif leading-relaxed p-5 text-blue-grey-600 bg-blue-grey-050">
          Hi, I'm Andrew! I'm a web developer from Pensacola, Florida. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dicta
          officia vero ipsam saepe dolore qui voluptate, dignissimos corrupti
          est ullam fugiat commodi debitis enim adipisci. Sit provident facere
          ex dolorem et atque exercitationem hic fugit, aspernatur doloribus ad
          praesentium iure earum debitis dolores magnam incidunt.
        </p>
      </div>

      <div className="max-w-lg mx-5 my-5 shadow-lg">
        <h1 className="font-brand font-medium pt-8 pl-5 pb-4 text-2xl text-blue-grey-050 bg-magenta-500 rounded-t-lg">
          Skills
        </h1>
        <p className="font-serif leading-relaxed p-5 text-blue-grey-600 bg-blue-grey-050">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          vitae?
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
