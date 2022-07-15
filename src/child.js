import React, { useContext } from "react";
import {TransactionContext} from './transContext'

function Child(){

let transactions = useContext(TransactionContext)


    return(
  
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>
        <h3>Your Balance <br /> $245 </h3>
  
        <div className="expense-container">
           <h3> INCOME <br /> $500 </h3>
           <h3> EXPENSE <br /> $230 </h3>
        </div>
  
            <h3>histroy</h3>  
    
         <hr />

          <ul className="transaction-list">
            {transactions.map((tranObj, ind)=>{
           return (  <li>
            <span> {tranObj.desc} </span>
            <span> {tranObj.amount} </span>
           </li>
           )
            })}
           

          </ul>

         <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
              <label>
                Enter Description <br />
                <input type="tex" required />
              </label>
              <br />
              <label>
                Enter Amount <br />
                <input type="number" required />
              </label>
              <br />
<input type="submit" value="Add Transaction" />
           

            </form>


      </div>
  
    )
  }

  export default Child;