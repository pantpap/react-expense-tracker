import React from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseHandler = (childExpenseData) =>{
        const expenseData = {
          ...childExpenseData,
            id: 'e5'
        }
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
}

export default NewExpense
