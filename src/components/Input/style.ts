import styled from "styled-components";

export const StyledInput = styled.input`
  height: 40px;
  width: 150px;
  border-radius: 10px;
  border: 2px solid white;
  font-weight: 600;
  text-shadow: 2px 2px 2px black;
  ::placeholder {
    color: white;
    font-weight: 600;
    opacity: 70%;
  }
  background-color: transparent;
  &:focus {
    border: 2px solid var(--blue);
  }
  color: white;
  font-size: 1em;
  padding-left: 5px;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  font-family: "Source Sans Pro", sans-serif;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  img {
    width: 30px;
    height: 30px;
    position: absolute;
    margin: 7px 5px 0 0;
    right: 0;
  }
`;
