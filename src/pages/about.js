import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import photo from "../images/photo-1.png"
import { FaStar } from "react-icons/fa"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="bg-blue-grey-050 py-10 sm:flex flex-col items-center">
      <div className="max-w-lg mx-5 mt-10 shadow-lg rounded-lg">
        <div className="p-5 flex justify-between items-center bg-magenta-500 rounded-t-lg">
          <h1 className="font-brand font-medium text-2xl text-blue-grey-050 self-end">
            About me
          </h1>
          <img
            className="rounded-full h-16"
            src={photo}
            alt="Andrew Gilliland"
          />
        </div>
        <p className="font-serif leading-relaxed p-5 text-blue-grey-600 sm:text-lg">
          Hi, I'm Andrew! I'm a web developer from Pensacola, Florida. I love
          learning anything and everything about web development and design and
          enjoy sharing what I learn along the way.
        </p>
        <p className="font-serif leading-relaxed p-5 text-blue-grey-600 sm:text-lg">
          This website was built with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            className="font-sans text-magenta-500 font-semibold hover:underline"
          >
            Gatsby
          </a>
          , styled with{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-sans text-magenta-500 font-semibold hover:underline"
          >
            Tailwind CSS
          </a>
          , and hosted by{" "}
          <a
            href="https://www.netlify.com/"
            className="font-sans text-magenta-500 font-semibold hover:underline"
          >
            Netlify
          </a>
          .
        </p>
      </div>

      <div className="max-w-lg mx-5 mt-10 shadow-lg rounded-lg">
        <div className="p-5 flex justify-between items-center bg-magenta-500 rounded-t-lg">
          <h1 className="font-brand font-medium text-2xl text-blue-grey-050 self-end">
            Skills
          </h1>
          <div className="bg-yellow-vivid-300 rounded-full h-16 w-16 flex justify-center items-center">
            <FaStar className="text-yellow-vivid-700" size="35" />
          </div>
        </div>
        <div className="p-5">
          <p className="text-blue-grey-700 font-semibold">
            Here is an evergrowing list of technologies I work with.
          </p>
          <div>
            <h3 className="mt-5 text-magenta-500 font-semibold">JavaScript</h3>
            <ul className="text-blue-grey-500 ml-3">
              <li>
                <h4 className="font-semibold">React</h4>
                <ul className="ml-3">
                  <li>Gatsby</li>
                  <li>Next.js</li>
                </ul>
              </li>
              <li>
                <h4 className="mt-2 font-semibold">Node.js</h4>
                <ul className="ml-3">
                  <li>Express</li>
                  <li>Mongoose</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-magenta-500 font-semibold">CSS3</h3>
            <ul className="font-semibold text-blue-grey-500 ml-3">
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <h3 className="mt-5 text-magenta-500 font-semibold">HTML5</h3>
          <h3 className="mt-5 text-magenta-500 font-semibold">
            Responsive Design
          </h3>
          <h3 className="mt-5 text-magenta-500 font-semibold">MongoDB</h3>
          <div>
            <h3 className="mt-5 text-magenta-500 font-semibold">CMSs</h3>
            <ul className="font-semibold text-blue-grey-500 ml-3">
              <li>Wordpress</li>
              <li>Netlify CMS</li>
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-magenta-500 font-semibold">APIs</h3>
            <ul className="font-semibold text-blue-grey-500 ml-3">
              <li>Stripe</li>
              <li>Shopify</li>
              <li>SendGrid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
