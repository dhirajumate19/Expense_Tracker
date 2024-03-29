import logo from "./logo.svg";
import "./App.css";
import InvestmentForm from "./Components/InvestmentForm/InvestementForm";
import InvestmentResult from "./Components/InvestmentResult/InvestmentResult";
import { useState } from "react";

function App() {
  const [investedData, setInvestedData] = useState(null);
  const calculateHandler = (investedData) => {
    setInvestedData(investedData);
  };
  const yearlyData = [];
  if (investedData) {
    let currentSavings = +investedData["current-savings"];

    const yearlyContribution = +investedData["yearly-contribution"];
    const expectedReturn = +investedData["expected-return"] / 100;

    const duration = +investedData["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  console.log("yaer data" + yearlyData);
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm onSaveInvestedData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!investedData && <p>No Investment calculate yet.</p>}
      {investedData && (
        <InvestmentResult
          data={yearlyData}
          initialInvestment={investedData["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
