import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import "./ExpenseSepration.css";

function ExpenseSepration(props) {
  // console.log("props data"+props.data.title);
  const [filterYear, setFilterYear] = useState("2023");
  const selectedFilterHandler = (selectedItem) => {
    setFilterYear(selectedItem);
  };
  const filterItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filterYear;
  });
  // console.log(filterItems);



  // if (filterItems.length > 0) {
  //   expenseContent = filterItems.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       price={expense.price}
  //       date={expense.date}
  //     />
  //   ));

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={selectedFilterHandler}
        />
        <ExpenseChart expenses={filterItems}/>
        <ExpenseList items={filterItems} />
        {/* {props.items.map((expense) => {
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />;
        })} */}

        {/* <ExpenseItem title={props.data[0].title}  price={props.data[0].price} date={props.data[0].date} /> */}
      </Card>
    </div>
  );
}

export default ExpenseSepration;
