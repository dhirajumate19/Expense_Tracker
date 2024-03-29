import React from "react";
import { useState } from "react";

function ExpenseFilter(props) {
  const selectFilterHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div>
      <div className="expenses-filter"></div>
      <div className="expenses-filter__control">
        <label htmlFor="">Filter By Year</label>
        <select value={props.selected} onChange={selectFilterHandler}>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
