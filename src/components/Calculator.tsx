import styled from "styled-components";
import { useState } from "react";

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
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const resultStyle =
    result !== null && parseFloat(result) < 0 ? { color: "red" } : {};

  const handleButtonClick = (value: string) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let expResult = 1;

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Inputs are invalid, please select a valid number.");
    } else {
      switch (value) {
        case "+":
          setResult((num1 + num2).toString());
          break;
        case "-":
          setResult((num1 - num2).toString());
          break;
        case "*":
          setResult((num1 * num2).toString());
          break;
        case "/":
          if (num2 === 0) {
            setResult("Please enter a valid divisor.");
          } else {
            setResult((num1 / num2).toString());
          }
          break;
        case "^":
          for (let i = 0; i < num2; i++) {
            expResult = expResult * num1;
          }
          setResult(expResult.toString());
          break;
        case "C":
          setInput1("");
          setInput2("");
          setResult(null);
          break;
      }
    }
  };

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
      <Button onClick={() => handleButtonClick("+")}>+</Button>
      <Button onClick={() => handleButtonClick("-")}>-</Button>
      <Button onClick={() => handleButtonClick("*")}>*</Button>
      <Button onClick={() => handleButtonClick("/")}>/</Button>
      <Button onClick={() => handleButtonClick("^")}>^</Button>
      <Button onClick={() => handleButtonClick("C")}>C</Button>
      <h5>Output</h5>
      <div style={{ ...resultStyle }}>
        <p>{result}</p>
      </div>
    </>
  );
}
