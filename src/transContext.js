import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransaction = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "book"},
    {amount: 200, desc: "Cash"},
  ]

export  const TransactionContext = createContext(initialTransaction)



export const TransactionProvider = ({})=>{
  let [state, dispatch] = useReducer(TransactionReducer,initialTransaction);
  
  function addTransaction(transObj){
dispatch({
  type:"ADD_TRANSACTION",
  payload:{
    amount: transObj.amount,
     desc: transObj.desc
    },
})
  }
}