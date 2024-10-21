"use client";

import { numberWithCommas } from "@/utils/format";
import { GlobalContext } from "@/context/GlobalState";
import React, { useContext } from "react";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((price) => price > 0)
    .reduce((acc, price) => (acc += price), 0)
    .toFixed(2);
  const expense = amounts
    .filter((price) => price < 0)
    .reduce((acc, price) => (acc += price), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
