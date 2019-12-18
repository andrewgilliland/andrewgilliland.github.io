import React from "react"
import { Link } from "gatsby"

const Article = ({ title, date, slug }) => {
  return (
    <div className="p-5 bg-blue-grey-050 border-b-2 border-solid border-blue-grey-300 flex justify-between items-center">
      <div className="flex">
        <svg
          className="h-5 w-5 fill-current self-center text-magenta-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z" />
        </svg>
        <div className="pl-5 cursor-pointer">
          <Link to={slug}>
            <h3 className="text-blue-grey-900 font-bold">{title}</h3>
            <p className="text-blue-grey-700 font-semibold">{date}</p>
          </Link>
        </div>
      </div>
      <p className="h-8 px-2 py-1 text-orange-vivid-800 bg-orange-vivid-200 rounded">
        New
      </p>
    </div>
  )
}

export default Article
