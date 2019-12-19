import React from "react"
import { Link } from "gatsby"

import { FaGithub, FaTwitter, FaRegCalendarCheck } from "react-icons/fa"

const Article = ({ title, date, slug }) => {
  return (
    <Link to={slug}>
      <div className="p-5 bg-blue-grey-050 flex justify-between items-center hover:bg-magenta-050 hover:border-2 hover:border-solid hover:border-magenta-100">
        <div className="flex">
          <FaRegCalendarCheck className="text-magenta-700" size="40"/>
          <div className="ml-3">
            <h3 className="text-blue-grey-900 font-bold">{title}</h3>
            <p className="text-blue-grey-700 font-semibold">{date}</p>
          </div>
        </div>
        <p className="h-8 px-2 py-1 text-green-vivid-800 bg-green-vivid-200 rounded-lg">
          New
        </p>
      </div>
    </Link>
  )
}

export default Article
