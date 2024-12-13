"use client";

import { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import PageLayout from "@/components/layouts/PageLayout";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

type ChartType = "area" | "bar" | "line" | "pie";

const ChartBuilderPage = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [chartTitle, setChartTitle] = useState<string>("Chart Title");

  useEffect(() => {
    console.log(chartType);
  }, [chartType]);

  return (
    <PageLayout title="Chart Builder">
      <section className="mx-8 mt-10 pb-32 md:mx-0 md:mt-0">
        <div className="mt-4 grid gap-4 sm:grid-flow-col">
          <div>
            <label
              htmlFor="chartType"
              className="mb-2 block text-sm font-medium text-white"
            >
              Select Chart Type
            </label>
            <select
              id="chartType"
              value={chartType}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setChartType(event.target.value as ChartType)
              }
              className="rounded-lg border-2 border-white bg-black px-4 py-3"
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="area">Area Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
          </div>

          <div className="">
            <label
              htmlFor="chartTitle"
              className="mb-2 block text-sm font-medium text-white"
            >
              Chart Title
            </label>
            <input
              type="text"
              id="chartTitle"
              value={chartTitle}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setChartTitle(event.target.value)
              }
              className="rounded-lg border-2 border-white bg-black px-4 py-3 text-white"
            />
          </div>
        </div>

        <div className="mt-4 rounded-lg border-2 border-white bg-white">
          <div className="rounded-lg border-2 border-black">
            <div className="border-b-2 border-black bg-black px-4 py-3">
              <div className="font-medium text-white">
                {chartTitle ? chartTitle : "Please Enter A Chart Title"}
              </div>
            </div>
            <VictoryChart theme={VictoryTheme.clean}>
              <VictoryLine />
            </VictoryChart>
          </div>
        </div>

        <a
          className="mt-4 flex max-w-fit cursor-pointer items-center gap-2 rounded-lg border-2 border-white bg-pink-600 px-4 py-3"
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
