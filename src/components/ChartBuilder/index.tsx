import { useEffect, useState } from "react";
import {
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
} from "victory";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import Input from "../forms/Input";

type ChartType = "area" | "bar" | "line" | "pie";

type Chart = {
  type: ChartType;
  title: string;
  data: { x: number; y: number }[];
};

const ChartBuilder = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [chartTitle, setChartTitle] = useState<string>("New Line Chart");
  const [yAxisColor, setYAxisColor] = useState<string>("black");
  const [axisLabelFontSize, setAxisLabelFontSize] = useState<number>(20);

  useEffect(() => {
    console.log(chartType);

    console.log(VictoryTheme.clean);
  }, [chartType]);

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const chartMap = {
    line: <VictoryLine data={data} />,
    bar: <VictoryBar />,
    area: <VictoryArea />,
    pie: <VictoryPie />,
  };

  const chartTheme = {
    axis: {
      style: {
        axis: {
          stroke: yAxisColor,
        },
        axisLabel: {
          fontSize: axisLabelFontSize,
          padding: 30,
        },
        grid: {
          fill: "none",
          stroke: "none",
        },
        ticks: {
          stroke: "grey",
        },
        tickLabels: {
          fontSize: 15,
          padding: 5,
        },
      },
    },
    line: {
      style: {
        data: {
          stroke: "black",
          strokeWidth: 5,
        },
        labels: {
          fontSize: 20,
          padding: 30,
        },
      },
    },
    pie: {
      style: {
        data: {
          stroke: "black",
          strokeWidth: 5,
        },
        labels: {
          fontSize: 20,
          padding: 30,
        },
      },
    },
  };

  return (
    <section className="mx-8 mt-10 pb-32 md:mx-0 md:mt-0">
      <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-4">
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

        <Input
          className={""}
          label="Chart Title"
          name="chartTitle"
          type="text"
          value={chartTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setChartTitle(event.target.value)
          }
        />
      </div>

      <div className="col-span-2 row-span-2 grid">
        <div className="mb-2 text-sm font-medium text-white">Chart Tools</div>
        <div className="grid grid-cols-3 gap-4 rounded-xl border-2 border-white p-4">
          <Input
            className={""}
            label="Axis Label Font Size"
            name="axisLabelFontSize"
            type="number"
            value={axisLabelFontSize}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAxisLabelFontSize(Number(event.target.value))
            }
          />
          <Input
            className={""}
            label="Axis Color"
            name="axisColor"
            type="text"
            value={yAxisColor}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setYAxisColor(event.target.value)
            }
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
          <VictoryChart theme={chartTheme}>{chartMap[chartType]}</VictoryChart>
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
  );
};

export default ChartBuilder;
