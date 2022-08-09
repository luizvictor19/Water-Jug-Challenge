import { ReactElement } from "react";
import { IStepsList, ITable } from "../../types";
import { StyledTable } from "./style";

export const ResultTable = ({ steps }: ITable): ReactElement => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Bucket X</th>
          <th>Bucket Y</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        {steps.map((step: IStepsList): ReactElement => {
          return (
            <>
              <tr>
                <td>{step.bucketXAmount}</td>
                <td>{step.bucketYAmount}</td>
                <td>{step.explanation}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
