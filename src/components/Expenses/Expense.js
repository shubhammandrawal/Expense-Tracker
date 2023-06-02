import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './expenses.css'

export default function Expenses({expenses}){

  const[year, setYear] = useState('2020')

    const FilterHandler = (selectedYear) =>{
        setYear(selectedYear)
    }
      
    return<>
    <Card className="expenses">
      <ExpensesFilter FilterHandler={FilterHandler} selected={year}    />
          {expenses.map((item)=>{
            // debugger
            return <ExpenseItem 
                      title={item.title} 
                      amount={item.amount}
                      date={item.date}
                      key = {item.id}
                  />
          })}
    </Card>
    </>
}