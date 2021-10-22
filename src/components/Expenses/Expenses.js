import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseForm from "../NewExpense/ExpenseForm";
import NewExpense from "../NewExpense/NewExpense";


const Expenses = (props) =>{
    return (
        <Card className='expenses'>
            <NewExpense/>
            { props.items.map(item =>{
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title} 
                        amount={item.amount} 
                        date={item.date}
                    />
                )
            })}
        </Card>
    )
}

export default Expenses
