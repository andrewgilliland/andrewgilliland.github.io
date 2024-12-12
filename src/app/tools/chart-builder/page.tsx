import PageLayout from "@/components/layouts/PageLayout";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const ChartBuilderPage = () => {
  return (
    <PageLayout title="Chart Builder">
      <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        <a
          className="flex max-w-fit cursor-pointer items-center gap-2 rounded-lg border-2 border-white bg-pink-600 px-4 py-3"
          download={""}
        >
          <span className="font-semibold text-white">Download</span>
          <ArrowDownOnSquareIcon className="h-6 w-6 stroke-2 text-white" />
        </a>
      </section>
    </PageLayout>
  );
};

export default ChartBuilderPage;
