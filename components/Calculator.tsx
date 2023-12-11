import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleNumberClick = (number: number) => {
    setError("");
    if (operator) {
      setSecondNumber(secondNumber + number.toString());
    } else {
      setFirstNumber(firstNumber + number.toString());
    }
  };

  const handleOperatorClick = (operator: string) => {
    setError("");
    setOperator(operator);
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        if (secondNumber === "0") {
          setError("Cannot divide by zero");
          return;
        }
        result = Number(firstNumber) / Number(secondNumber);
        break;
      default:
        return;
    }
    setResult(result.toString());
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-full bg-gray-200 text-right p-4 rounded-lg text-2xl">
        {error ? error : `${firstNumber} ${operator} ${secondNumber}`}
      </div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={() => handleOperatorClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
      <button
        className="bg-green-500 text-white rounded-lg px-4 py-2"
        onClick={calculate}
      >
        Calculate
      </button>
      <button
        className="bg-red-500 text-white rounded-lg px-4 py-2"
        onClick={clear}
      >
        Clear
      </button>
      <div className="text-2xl">{result}</div>
    </div>
  );
};

export default Calculator;