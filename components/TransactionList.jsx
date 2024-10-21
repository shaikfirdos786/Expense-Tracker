"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalState";
import Transaction from "./Transaction";
import LoadingIndicator from "./UI/LoadingIndicator";

const TransactionList = () => {
  const { transactions, loading } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {loading && <LoadingIndicator />}
        {!loading &&
          transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
