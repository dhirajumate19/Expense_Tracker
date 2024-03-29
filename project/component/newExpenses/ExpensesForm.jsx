import React from "react";
import { useState } from "react";
import "./ExpensesForm.css";
function ExpenseForm(props) {
  const [enterTitle, SetEnterTitle] = useState("");
  const [enterPrice, SetEnterPrice] = useState("");
  const [enterDate, SetEnterDate] = useState("");
  const titleChangeHandler = (e) => {
    SetEnterTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    SetEnterPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    SetEnterDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      price: +enterPrice,
      date: new Date(enterDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    SetEnterTitle("");
    SetEnterPrice("");
    SetEnterDate("");
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="new-expense__controls">
        <div className="new-expense__control ">
          <label htmlFor="">Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="text"
            value={enterPrice}
            min={"0.1"}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control ">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enterDate}
            min={"2018-05-15"}
            max={"2025-05-12"}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={props.onCancle}>
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
