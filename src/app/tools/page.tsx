import Link from "next/link";

const ToolsPage = () => {
  return (
    <div className="mx-auto mt-14 h-screen w-full max-w-3xl">
      <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
          Tools
        </h2>

        <div className="mt-4">
          <Link href={`/tools/chart-builder`} className="group relative">
            <div
              className={`absolute bottom-0 h-full w-full rounded border-2 border-white`}
            />
            <div
              className={`flex transform-gpu justify-between rounded border-2 border-white bg-black p-4 transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
            >
              <div className={`font-bold capitalize text-white`}>
                Chart Builder
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
