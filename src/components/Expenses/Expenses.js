import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) =>{
    const [selectedYear, setSelectedYear] = useState('2020');

    const onChangeFilter = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(i => {
        return i.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={selectedYear} onChangeFilter={onChangeFilter}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses
