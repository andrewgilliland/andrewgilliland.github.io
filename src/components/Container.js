import React from "react"

const Container = ({ children }) => {
  return (
    <>
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">{children}</div>
    </>
  )
}

export default Container
