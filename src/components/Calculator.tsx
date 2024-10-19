import styled from "styled-components";
import useCalculator from "./useCalculator";

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  margin: 5px;
`;

export default function Calculator() {
  const { input1, input2, result, setInput1, setInput2, calculateResult } =
    useCalculator();

  const resultStyle =
    result !== null && parseFloat(result) < 0 ? { color: "red" } : {};

  return (
    <>
      <StyledInput
        type="number"
        step="any"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Input 1"
      />
      <StyledInput
        type="number"
        step="any"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Input 2"
      />
      {["+", "-", "*", "/", "^", "C"].map((op) => (
        <Button key={op} onClick={() => calculateResult(op)}>
          {op}
        </Button>
      ))}
      <h5>Output</h5>
      <div style={resultStyle}>
        <p>{result}</p>
      </div>
    </>
  );
}
