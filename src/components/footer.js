import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="flex justify-center bg-blue-grey-100 px-4 py-3">
    <div className="text-blue-grey-900">© {new Date().getFullYear()} Andrew Gilliland</div>
  </footer>
)

export default Footer
