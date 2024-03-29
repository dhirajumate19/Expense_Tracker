import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpensesForm";

import "./NewExpenses.css";

function NewExpenses(props) {
  const [disabelButton, setDisable] = useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expesneData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    // console.log("In new Expense js" + expesneData);
    props.onAddExpenseData(expesneData);
    setDisable(false);
  };

  const onAddexpenseButton = () => {
    setDisable(true);
  };
  const onCancleClickHandler = () => {
    setDisable(false);
  };
  return (
    <div className="new-expense">
      {!disabelButton && (
        <button type="submit" onClick={onAddexpenseButton}>
          Add New Expenses
        </button>
      )}

      {disabelButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={onCancleClickHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
