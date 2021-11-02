import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [editMode, setEditMode] = useState(false);

    const saveExpenseHandler = (childExpenseData) =>{
        const expenseData = {
          ...childExpenseData,
            id: 'e5'
        }
        props.onAddExpense(expenseData);
        cancelHandler();
    }
    const onBtnClick = () => {
        setEditMode(true);
    }

    const cancelHandler = () => {
        setEditMode(false);
    }

    return (
        <div className="new-expense">
            {!editMode && <button onClick={onBtnClick}>Add New Expense</button>}
            {editMode && <ExpenseForm onSaveExpenseData={saveExpenseHandler} cancelClicked={cancelHandler}/>}
        </div>
    )
}

export default NewExpense
