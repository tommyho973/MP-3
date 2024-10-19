import { useState } from "react";
function useCalculator() {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = (operation: string) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let expResult = 1;

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Inputs are invalid, please select a valid number.");
    } else {
      switch (operation) {
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
            expResult *= num1;
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

  return {
    input1,
    input2,
    result,
    setInput1,
    setInput2,
    calculateResult,
  };
}
export default useCalculator;
