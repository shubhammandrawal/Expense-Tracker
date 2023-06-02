import {useState} from 'react';
import './expenseForm.css';
export default function ExpenseForm({SaveExpenses}){
     // const[title, setTitle] = useState('')
    // const[amount, setAmount] = useState('')
    // const[date, setDate] = useState('')

    const[data, setData] = useState(
        {
            title: '',
            amount: '',
            date: ''
        }
    )

    const titleChangeHandler = (e)=>{
            setData((prevData)=>{
               return {...prevData, title: e.target.value}
            })
    }

    const amountChangeHandler = (e)=>{
        setData((prevData)=>{
            return {...prevData, amount: e.target.value}
        })
    }

const dateChangeHandler = (e)=>{
    setData((prevData)=>{
        return {...prevData, date: e.target.value}
    })
}

const SubmitHandler = (e) => {
    e.preventDefault();
    SaveExpenses(data);
    setData({
        title: '',
        amount: '',
        date: ''
    })
}


    return<form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler} 
                        value={data.title} 
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input 
                        type="Number" 
                        onChange={amountChangeHandler} 
                        value={data.amount}
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="01-01-2020" 
                        max="31-12-2022" 
                        onChange={dateChangeHandler} 
                        value={data.date} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
             </div>
    </form>
}