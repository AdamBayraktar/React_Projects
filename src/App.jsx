import { useState } from "react";
import { Calculator } from "./components/Calculator.jsx";
import { Header } from "./components/Header.jsx";
import { ResultTable } from "./components/ResultTable.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [userInputs, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const calculatedValues = calculateInvestmentResults(userInputs);
  return (
    <>
      <Header></Header>
      <Calculator userInputs={userInputs} setUserInput={setUserInput} />
      <ResultTable calculatedValues={calculatedValues} />
    </>
  );
}

export default App;
