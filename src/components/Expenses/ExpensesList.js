import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
export default function ExpensesList({FilteredExpenses}) {

    if(FilteredExpenses.length===0){
      return  <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return <ul className='expenses-list'>
        {FilteredExpenses.map((item) => {
            // debugger
            return <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                key={item.id} />
            })}
    </ul>
}