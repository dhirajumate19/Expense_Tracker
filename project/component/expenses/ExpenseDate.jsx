import React from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";
function ExpenseDate(props) {
  const date1 = new Date(props.date);
  
  return (
    <Card className="expense-date">
      <div className="expense-date__day">{date1.getDate()}</div>
      <div className="expense-date__month">{date1.getMonth()}</div>
      <div className="expense-date__year">{date1.getFullYear()}</div>
      
    </Card>
  );
}

export default ExpenseDate;
