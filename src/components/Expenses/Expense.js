import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import './expenses.css'
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart"


export default function Expenses({ expenses }) {

  const [year, setYear] = useState('2020')

  const FilterHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  const FilteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  return <>
    <Card className="expenses">
      <ExpensesFilter FilterHandler={FilterHandler} selected={year} />
      <ExpenseChart expenses={FilteredExpenses} />
      <ExpensesList FilteredExpenses={FilteredExpenses} />
    </Card>
  </>
}