import { IInput } from "../../types";
import { StyledDiv, StyledInput } from "./style";
import bucketImg from "../../assets/Bucket.png";

export const Input = ({ placeholder, setValue }: IInput) => {
  return (
    <StyledDiv>
      <img src={bucketImg} alt="Bucket"></img>
      <StyledInput
        onChange={(e) => setValue(e.target.value)}
        type="number"
        placeholder={placeholder}
        min={1}
      />
    </StyledDiv>
  );
};
