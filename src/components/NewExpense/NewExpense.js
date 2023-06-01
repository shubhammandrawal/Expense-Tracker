import ExpenseForm from "./ExpenseForm";
import './newExpense.css'

export default function NewExpense({onAddExpense}){
    const SaveExpenses = (prevData) =>{
        const expenseData = {
            ...prevData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        onAddExpense(expenseData)
    }
    return<div className='new-expense'>
            <ExpenseForm SaveExpenses={SaveExpenses} />
    </div>
}