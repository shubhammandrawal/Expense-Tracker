import ExpenseDate from './ExpenseDate'
import './expense.css'


export default function ExpenseItem(props){
    return<div className="expense-item">
        <div className="">
           <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
           <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">
           {props.amount}
        </div>
    </div>
}