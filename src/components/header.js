import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)

  function toggle() {
    setOpen(!isOpen)
  }

  function toggleKeyPress() {
    setOpen(!isOpen)
  }

  return (
    <header className="bg-blue-grey-050 border-t-8 border-solid border-magenta-700 px-4 py-3">
      <div className="max-w-3xl mx-auto my-0 flex justify-around items-center">
        <div className="w-8 h-8 bg-magenta-700 rounded-full"></div>
        <div className="flex justify-around items-center">
          <h1>
            <Link
              to="/"
              className="font-semibold text-blue-grey-200 text-xl px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 focus:outline-none focus:bg-blue-grey-400 focus:text-blue-grey-900"
            >
              {siteTitle}
            </Link>
          </h1>
          <Link to="/articles">
            <div className="ml-3 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 hidden sm:block">
              Articles
            </div>
          </Link>
          <Link to="/about">
            <div className="ml-3 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 hidden sm:block">
              About
            </div>
          </Link>
        </div>
        <div className="w-8 h-8 bg-blue-grey-200 rounded-full hidden sm:block"></div>
        <div
          onClick={toggle}
          onKeyPress={toggleKeyPress}
          className="w-8 h-8 bg-blue-grey-200 rounded-full flex justify-center items-center sm:hidden"
        >
          <svg
            className="h-6 w-6 fill-current text-magenta-500"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd" 
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </div>
      </div>
      <div className={isOpen ? "flex flex-col items-center" : "hidden"}>
        <Link to="/articles">
          <div className="mt-2 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900">
            Articles
          </div>
        </Link>
        <Link to="/about">
          <div className="mt-2 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900">
            About
          </div>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
