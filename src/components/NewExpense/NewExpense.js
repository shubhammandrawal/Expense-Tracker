import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './newExpense.css'

export default function NewExpense({onAddExpense}){

    const[editForm, setEditForm] = useState(false)

    const SaveExpenses = (prevData) =>{
        const expenseData = {
            ...prevData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
        setEditForm(false)
    }

    const startEditHandling = ()=>{
        setEditForm(true)
    }

    const stopEditingHandler = () =>{
        setEditForm(false)
    }
    return<div className='new-expense'>
          {!editForm && <button type="submit" onClick={startEditHandling}>Add new expense</button>}
           {editForm && <ExpenseForm 
                            SaveExpenses={SaveExpenses} 
                            onCancelClick={stopEditingHandler}
                        />}
    </div>
}