import React, { useContext, useState } from "react";
import {TransactionContext} from './transContext'

function Child(){

let {transactions,  addTransaction} = useContext(TransactionContext)

let [newDesc, setDesc] = useState("")
let [newAmount, setAmount] = useState(0)

const handleAddition = (event) =>{
  event.preventDefault()
  addTransaction({
    amount:newAmount,
    desc: newDesc
  })
}

const getIncome = () =>{
  let income = 0;
  for(var i = 0; i < transactions.length; i ++){
    if (transactions[i].amount > 0)
    income += transactions[i].amount
  }
  return income;
}

const getExpense = () =>{
  let Expense = 0;
  for(var i = 0; i < transactions.length; i ++){
    if (transactions[i].amount < 0)
    Expense += transactions[i].amount
  }
  return Expense;
}

    return(
  
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>
        <h3>Your Balance <br /> $245 </h3>
  
        <div className="expense-container">
           <h3> INCOME <br />   {getIncome()} </h3>
           <h3> EXPENSE <br /> {getExpense()} </h3>
        </div>
  
            <h3>histroy</h3>  
    
         <hr />

          <ul className="transaction-list">
            {transactions.map((tranObj, ind)=>{
           return (  <li key={ind}>
            <span> {tranObj.desc} </span>
            <span> {tranObj.amount} </span>
           </li>
           )
            })}
           

          </ul>

         <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
              <label>
                Enter Description <br />
                <input type="tex" onChange={(ev) =>setDesc(ev.target.value)} required />
              </label>
              <br />
              <label>
                Enter Amount <br />
                <input type="number" onChange={(ev) =>setAmount(ev.target.value)} required />
              </label>
              <br />
<input type="submit" value="Add Transaction" />
           

            </form>


      </div>
  
    )
  }

  export default Child;