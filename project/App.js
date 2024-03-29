// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import ExpenseSepration from "./component/expenses/ExpenseSepration";
import NewExpenses from "./component/newExpenses/NewExpenses";

const InitialExpense = [
  {
    id: "e1",
    title: "Home Loan",
    price: 1250,
    date: new Date(2023, 6, 17),
  },
  {
    id: "e2",
    title: "Car Loan",
    price: 1250,
    date: new Date(2023, 6, 14),
  },
  {
    id: "e3",
    title: "Trip Plan",
    price: 1250,
    date: new Date(2023, 6, 17),
  },
  {
    id: "e4",
    title: "Education Loan",
    price: 1250,
    date: new Date(2023, 6, 18),
  },
];

function App() {
  const [expenses, setExpense] = useState(InitialExpense);
  const addExpenseDataHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAddExpenseData={addExpenseDataHandler} />
      <ExpenseSepration items={expenses} />
    </div>
  );
}

export default App;
