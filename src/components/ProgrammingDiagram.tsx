import { useState } from "react";
import Diagram from "./Diagram";

const ProgrammingDiagram = () => {
  const [selectOption, setSelectOption] = useState("traditional-programming");
  const isTraditionalProgramming = selectOption === "traditional-programming";

  return (
    <div className="mt-48">
      <div className="flex justify-around mb-12">
        <label className="flex">
          <input
            type="radio"
            name="programming-type"
            value="traiditional-programming"
            checked={selectOption === "traditional-programming"}
            onChange={() => {
              setSelectOption("traditional-programming");
            }}
          />
          <div className="ml-4">Traditional Programming</div>
        </label>
        <label className="flex">
          <input
            type="radio"
            name="programming-type"
            value="machine-learning"
            checked={selectOption === "machine-learning"}
            onChange={() => {
              setSelectOption("machine-learning");
            }}
          />
          <div className="ml-4">Machine Learning</div>
        </label>
      </div>

      <Diagram
        inputs={
          isTraditionalProgramming ? ["Rules", "Data"] : ["Data", "Answers"]
        }
        text={
          isTraditionalProgramming
            ? "Traditional Programming"
            : "Machine Learning"
        }
        outputs={isTraditionalProgramming ? ["Answers"] : ["Rules"]}
      />
    </div>
  );
};

export default ProgrammingDiagram;
