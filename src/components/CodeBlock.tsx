const CodeBlock = () => (
  <div className="h-28 w-40 bg-gray-800 rounded p-3">
    <div className="bg-black rounded h-full w-full p-3">
      <div className="flex flex-row">
        <div className="bg-pink-400 rounded-md h-1.5 w-6" />
        <div className="bg-gray-600 rounded-md h-1.5 w-6 ml-1" />
      </div>
      <div className="flex flex-row mt-2">
        <div className="bg-pink-400 rounded-md h-1.5 w-5" />
        <div className="bg-cyan-400 rounded-md h-1.5 w-10 ml-1" />
        <div className="bg-yellow-400 rounded-md h-1.5 w-7 ml-1" />
      </div>
      <div className="ml-2">
        <div className="flex flex-row mt-2">
          <div className="bg-pink-400 rounded-md h-1.5 w-5" />
          <div className="bg-cyan-400 rounded-md h-1.5 w-8 ml-1" />
          <div className="bg-yellow-400 rounded-md h-1.5 w-4 ml-1" />
          <div className="bg-emerald-400 rounded-md h-1.5 w-4 ml-1" />
        </div>
        <div className="flex flex-row mt-2">
          <div className="bg-pink-400 rounded-md h-1.5 w-5" />
          <div className="bg-yellow-400 rounded-md h-1.5 w-10 ml-1" />
          <div className="bg-emerald-400 rounded-md h-1.5 w-7 ml-1" />
        </div>
        <div className="flex flex-row mt-2">
          <div className="bg-pink-400 rounded-md h-1.5 w-5" />
          <div className="bg-cyan-400 rounded-md h-1.5 w-10 ml-1" />
          <div className="bg-yellow-400 rounded-md h-1.5 w-7 ml-1" />
        </div>
      </div>
    </div>
  </div>
);

export default CodeBlock;
