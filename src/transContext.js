import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransaction = [
    {id:0, amount: 500, desc: "Cash"},
    {id:1, amount: -40, desc: "book"},
    {id:2, amount: 200, desc: "Cash"},
  ]

export  const TransactionContext = createContext(initialTransaction)



export const TransactionProvider = ({children})=>{
  let [state, dispatch] = useReducer(TransactionReducer,initialTransaction);
  
  function addTransaction(transObj){
dispatch({
  type:"ADD_TRANSACTION",
  payload:{
    id:Math.random() * 100,
    amount: transObj.amount,
     desc: transObj.desc,
    },
})}

function dELTransaction(id){
  dispatch({
    type:"DELETE_TRANSACTION",
    payload:{
     id
      },
  })

// dispatch({
//   type:"DELETE_TRANSACTION",
//   payload:{
//     amount: dle-item.amount,
//      desc: dle-item.desc,
//     },
// })

  }
  return(
    <TransactionContext.Provider value={{
      transactions: state,
      addTransaction,
      // 
      dELTransaction
    }}>
{children}
    </TransactionContext.Provider>
  )
}