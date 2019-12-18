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
    <header className="bg-blue-grey-050 border-t-4 border-solid border-magenta-700 px-4 py-3">
      <div className="max-w-6xl mx-auto my-0 flex justify-around items-center">
        <div className="w-5 h-5 bg-magenta-700 rounded-full"></div>
        <div className="flex justify-around items-center">
          <h1>
            <Link
              to="/"
              className="font-semibold text-blue-grey-200 text-xl px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 focus:outline-none focus:bg-blue-grey-400 focus:text-blue-grey-900"
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="ml-3 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 hidden sm:block">
            Articles
          </div>
          <div className="ml-3 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900 hidden sm:block">
            About
          </div>
        </div>
        <div
          onClick={toggle}
          onKeyPress={toggleKeyPress}
          className="w-5 h-5 bg-blue-grey-200 rounded-full"
        ></div>
      </div>
      <div className={isOpen ? "flex flex-col items-center" : "hidden"}>
        <div className="mt-2 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900">
          Articles
        </div>
        <div className="mt-2 font-semibold text-blue-grey-200 px-3 py-1 bg-blue-grey-600 rounded-full hover:bg-blue-grey-400 hover:text-blue-grey-900">
          About
        </div>
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
