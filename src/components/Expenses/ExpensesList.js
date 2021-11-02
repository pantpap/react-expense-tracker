import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0 ){
        return <p className="expenses-list__fallback">No expenses found</p>
    }
    return <ul className="expense-list">
        {props.filteredExpenses.map(item =>{
            return (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )
        })}
    </ul>
}

export default ExpensesList;
