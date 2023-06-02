
export default function Action({onCancelClick}){
    return<div className='new-expense__actions'>
        <button type='submit' onClick={onCancelClick}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
}