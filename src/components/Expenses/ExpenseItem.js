import {useState} from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './expenseItem.css'


export default function ExpenseItem({title, amount, date}){
   const[Expensetitle, setTitle]=useState(title)
   const clickHandler = ()=>{
      setTitle('Updated')
      console.log('clicked')
   }
    return<Card className="expense-item">
        <div className="">
           <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
           <h2>{Expensetitle}</h2>
        </div>
        <div className="expense-item__price">
           {amount}
        </div>
        <div>
         <button onClick={clickHandler}>Save</button>
        </div>
    </Card>
}