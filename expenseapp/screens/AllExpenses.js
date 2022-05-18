import {View,Text} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

import {useContext} from 'react'
import { ExpenseContext } from '../store/expenseContext';

function AllExpenses(){
   const expenseCtx=useContext(ExpenseContext);
    return (
        <ExpensesOutput expenses={expenseCtx.expenses} expenseperiod="total"/>
    );
}

export default AllExpenses;