import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { ResultTable } from "../../components/ResultTable";
import { IStepsList } from "../../types";
import { WaterJugChalangeBestSolution } from "../../utils/waterJugFunctions";
import { SolutionContainer } from "./style";

const Solution = () => {
  const [bucketX, setBucketX] = useState<string>("");
  const [bucketY, setBucketY] = useState<string>("");
  const [measureWanted, setMeasureWanted] = useState<string>("");
  const [steps, setSteps] = useState<Array<IStepsList>>([]);
  const [noSolution, setNoSolution] = useState<boolean>(false);
  const [initialState, setInitialState] = useState<boolean>(true);

  const handleCalculateClick = () => {
    if (
      bucketX.length === 0 ||
      bucketY.length === 0 ||
      measureWanted.length === 0
    ) {
      setSteps([]);
      setNoSolution(true);
      setInitialState(false);
    } else if (
      WaterJugChalangeBestSolution(
        parseInt(bucketX),
        parseInt(bucketY),
        parseInt(measureWanted)
      ) !== "No solution"
    ) {
      setSteps(
        WaterJugChalangeBestSolution(
          parseInt(bucketX),
          parseInt(bucketY),
          parseInt(measureWanted)
        ) as Array<IStepsList>
      );
      setNoSolution(false);
      setInitialState(false);
    } else {
      setSteps([]);
      setNoSolution(true);
      setInitialState(false);
    }
  };

  const navigate = useNavigate();

  return (
    <SolutionContainer>
      <div className="inputs-and-buttons">
        <>
        <button className="home-page-button" onClick={() => navigate("/")}>
            Home Page
          </button>
          <div className="inputs-container">
            <Input placeholder="Bucket 1" setValue={setBucketX} />
            <Input placeholder="Bucket 2" setValue={setBucketY} />
            <Input placeholder="Measure Wanted" setValue={setMeasureWanted} />
          </div>
          <button className="calculate-button" onClick={() => handleCalculateClick()}>
            Calculate Steps
          </button>
          {!noSolution && !initialState && <p>{steps.length} Steps</p>}
          {!noSolution && !initialState ? (
            <ResultTable steps={steps} />
          ) : (
            !initialState && <p>No Solution</p>
          )}
        </>
      </div>
    </SolutionContainer>
  );
};

export default Solution;
