import React, { createContext } from "react";

const initialTransaction = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "book"},
    {amount: 200, desc: "Cash"},
  ]

export  const TransactionContext = createContext(initialTransaction )