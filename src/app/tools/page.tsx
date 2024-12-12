import PageLayout from "@/components/layouts/PageLayout";
import Link from "next/link";

const ToolsPage = () => {
  return (
    <PageLayout title="Tools">
      <section className="mx-8 mb-24 mt-14 md:mx-0 md:mt-0">
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
      </section>
    </PageLayout>
  );
};

export default ToolsPage;
