import React from "react"

const CodeBlock = ({filename, language, code}) => {
  return (
    <>
      <div className=" text-sm bg-blue-grey-900 mx-auto mt-4 rounded border-b-1 max-w-xl">
        <div className="p-4 border-b border-blue-grey-700 flex justify-between">
          <h3 className="font-sans text-blue-grey-050">{filename}</h3>
          <div className="font-mono text-yellow-vivid-800 bg-yellow-vivid-200 px-2 rounded">
            {language}
          </div>
        </div>
        <pre className="p-4">
          <code className="block font-mono tracking-tight text-magenta-400 whitespace-pre-wrap">
            {code}
          </code>
        </pre>
      </div>
    </>
  )
}

export default CodeBlock
