import {View,Text} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import {useContext} from 'react'
import { ExpenseContext } from '../store/expenseContext';
import { getDateMinusDays } from '../util/date';
import { useEffect } from 'react';
import { fetchExpense } from '../util/http';
import { useState } from 'react';

function RecentExpenses(){

    const expenseCtx=useContext(ExpenseContext);
    

    useEffect(()=>{
        async function getexpense(){
  const expenses=await fetchExpense();
  expenseCtx.setExpense(expenses);
        }
        getexpense();
    },[]);

   const recentExpense=expenseCtx.expenses.filter((expense)=>{
       const today=new Date();
       const day7daysago=getDateMinusDays(today,7);

       return expense.date > day7daysago;

   })
    

    
    return (
       <ExpensesOutput expenses={recentExpense} expenseperiod="last seven days"/>
    );
}

export default RecentExpenses;