"use client";

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

// type Chart = {
//   type: ChartType;
//   title: string;
//   data: { x: number; y: number }[];
// };

const ChartBuilder = () => {
  //   const data = [
  //     { x: 1, y: 2 },
  //     { x: 2, y: 3 },
  //     { x: 3, y: 5 },
  //     { x: 4, y: 4 },
  //     { x: 5, y: 7 },
  //   ];

  const [chartType, setChartType] = useState<ChartType>("line");
  const [chartTitle, setChartTitle] = useState<string>("New Line Chart");

  // Axis Options
  const [axisColor, setAxisColor] = useState<string>("black");
  const [axisLabelFontSize, setAxisLabelFontSize] = useState<number>(20);
  const [axisTickFontSize, setAxisTickFontSize] = useState<number>(12);
  const [axisTickColor, setAxisTickColor] = useState<string>("black");

  // Line Chart Options
  const [lineColor, setLineColor] = useState<string>("blue");
  const [lineWidth, setLineWidth] = useState<number>(2);

  // Chart Data
  const [chartData, setChartData] = useState([
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ]);

  const handleClick = () => {
    setChartData(chartData);
  };

  useEffect(() => {
    console.log("useEffect chartData: ", chartData);
    // console.log(VictoryTheme.clean);
  }, [chartData]);

  const chartMap = {
    line: <VictoryLine data={chartData} />,
    bar: <VictoryBar />,
    area: <VictoryArea />,
    pie: <VictoryPie />,
  };

  const chartTheme = {
    axis: {
      //   height: 300,
      //   width: 450,
      padding: 50,
      style: {
        axis: {
          stroke: axisColor,
        },
        axisLabel: {
          fill: "red",
          fontSize: axisLabelFontSize,
          padding: 50,
        },
        grid: {
          fill: "none",
          stroke: "none",
        },
        ticks: {
          stroke: "red",
        },
        tickLabels: {
          fontSize: axisTickFontSize,
          padding: 5,
          fill: axisTickColor,
        },
      },
    },
    line: {
      //   height: 300,
      //   width: 450,
      style: {
        data: {
          stroke: lineColor,
          strokeWidth: lineWidth,
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
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
          label="Chart Title"
          name="chartTitle"
          type="text"
          value={chartTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setChartTitle(event.target.value)
          }
        />
      </div>

      <div className="mt-4">
        <div className="mb-2 text-sm font-medium text-white">
          Chart Axis Options
        </div>
        <div className="grid gap-4 rounded-xl border-2 border-white p-4 sm:grid-cols-2">
          <Input
            label="Axis Label Font Size"
            name="axisLabelFontSize"
            type="number"
            value={axisLabelFontSize}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAxisLabelFontSize(Number(event.target.value))
            }
          />
          <Input
            label="Axis Color"
            name="axisColor"
            type="text"
            value={axisColor}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAxisColor(event.target.value)
            }
          />
          <Input
            label="Axis Tick Font Size"
            name="axisTickFontSize"
            type="number"
            value={axisTickFontSize}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAxisTickFontSize(Number(event.target.value))
            }
          />
          <Input
            label="Axis Tick Color"
            name="axisTickColor"
            type="string"
            value={axisTickColor}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAxisTickColor(event.target.value)
            }
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 text-sm font-medium text-white">
          Line Chart Options
        </div>
        <div className="grid gap-4 rounded-xl border-2 border-white p-4 sm:grid-cols-2">
          <Input
            label="Line Color"
            name="lineColor"
            type="text"
            value={lineColor}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLineColor(event.target.value)
            }
          />
          <Input
            label="Line Width"
            name="lineWidth"
            type="number"
            value={lineWidth}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLineWidth(Number(event.target.value))
            }
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 text-sm font-medium text-white">Chart Data</div>
        <div className="grid-flow-rows grid gap-4 rounded-xl border-2 border-white p-4">
          {chartData.map((dataPoint, index) => (
            <div key={index} className="grid gap-4 sm:grid-cols-2">
              <Input
                label="X Value"
                name={`xValue-${index}`}
                type="number"
                value={dataPoint.x}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setChartData((prevData) => {
                    const newData = [...prevData];
                    newData[index].x = Number(event.target.value);
                    return newData;
                  });
                  setLineColor(lineColor === "red" ? "blue" : "red");
                }}
              />
              <Input
                label="Y Value"
                name={`yValue-${index}`}
                type="number"
                value={dataPoint.y}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setChartData((prevData) => {
                    const newData = [...prevData];
                    newData[index].y = Number(event.target.value);
                    return newData;
                  });
                  setLineColor(lineColor === "red" ? "blue" : "red");
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-lg border-2 border-white bg-white">
        <div className="rounded-lg border-2 border-black">
          <div className="border-b-2 border-black bg-black px-4 py-3">
            <div className="font-medium text-white">
              {chartTitle ? chartTitle : "Please Enter A Chart Title"}
            </div>
          </div>
          <VictoryChart theme={chartTheme}>
            {
              {
                line: <VictoryLine data={chartData} />,
                bar: <VictoryBar />,
                area: <VictoryArea />,
                pie: <VictoryPie />,
              }[chartType]
            }
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
  );
};

export default ChartBuilder;
