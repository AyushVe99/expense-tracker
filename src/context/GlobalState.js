import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initalState={
    transactions:[
        {id:1, text:'Salary', amount:51000},
        {id:2, text:'Rent', amount:-15000},
        {id:3, text:'EMI', amount:-5000},
    ]
}
console.log(initalState);

// create Context

export const GlobalContext=createContext(initalState);

// Provider Component

export const GlobalProvider=({children})=>
{
const[state,dispatch]=useReducer(AppReducer,initalState);

//Actions
function deleteTransaction(id)
{
    dispatch({
        type:"DELETE_TRANSACTION",
        payload:id
    });
}
function addTransaction(transaction)
{
    dispatch({
        type:"ADD_TRANSACTION",
        payload:transaction,
    });
}
//console.log(addTransaction);

return(<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction}}>
    {children}
</GlobalContext.Provider>);
}