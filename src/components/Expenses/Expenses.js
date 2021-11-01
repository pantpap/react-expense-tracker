import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";


const Expenses = (props) =>{
    const [selectedYear, setSelectedYear] = useState('2020');

    const onChangeFilter = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(i => {
        return i.date.getFullYear().toString() === selectedYear;
    })

    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={selectedYear} onChangeFilter={onChangeFilter}/>
            { filteredExpenses.map(item =>{
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
