import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const {addTransaction}=useContext(GlobalContext);
    const [text,setText]= useState('');
    const [amount,setAmount]= useState(0);
    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text:text,
            amount: +amount
        }
        console.log(newTransaction);
        addTransaction(newTransaction);
    }
  return (
    <>
       <h3 style={{paddingLeft: "5px"}}>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" style={{paddingLeft: "5px"}}>Text</label>
          <input type="text"  value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount" style={{paddingLeft: "5px"}}>Amount <br />
           </label>
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
