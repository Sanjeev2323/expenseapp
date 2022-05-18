import {useLayoutEffect, useContext} from 'react'
import {View, StyleSheet} from 'react-native';
import IconButton from '../UI/iconButton';

import {GlobalStyles} from '../constants/styles';
import Button from '../UI/Button';
import { ExpenseContext } from '../store/expenseContext';
import ExpenseForm from '../ManageExpense/ExpenseForm';
import { deleteExpense, StoreExpense, updateExpense } from '../util/http';



function ManageaExpenses({route,navigation}){
  
    const EditedExpenseId=route.params?.expenseId;
    const isEditing=!!EditedExpenseId;
    const expensectx=useContext(ExpenseContext);

    const selectedExpense=expensectx.expenses.find(expense=>expense.id===EditedExpenseId)


    useLayoutEffect(()=>{
        navigation.setOptions({
            title:isEditing ? 'Edit Expenses' : 'Add Expenses'
        })
    },[navigation,isEditing])
     
   async function deleteExpenseHandler(){
       await deleteExpense(EditedExpenseId);
        expensectx.deleteExpense(EditedExpenseId);
        navigation.goBack();


    }

    function cancelHandler(){
        navigation.goBack();
    }
    async function confirmHandler(expenseData){
        if(isEditing){
            expensectx.updateExpense(EditedExpenseId,expenseData);
            await updateExpense(EditedExpenseId,expenseData);

        }else{
           const id=await StoreExpense(expenseData);
            expensectx.addExpense({...expenseData,id:id});
        }
        navigation.goBack();
    }

    return (
        <View  style={styles.container1}>
            <ExpenseForm 
            submitBUttonLabel={isEditing?'Update' :'Add'}
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            defaultValues={selectedExpense}/>
           
            {isEditing && 
            <View  style={styles.container2}>
            <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}  />
             </View>}
        </View>
       

);
    }
    const styles=StyleSheet.create({
        container1:{
            flex:1,
            padding:24,
            backgroundColor:GlobalStyles.colors.primary800
    
        },
        container2:{
            marginTop:24,
            paddingTop:8,
            borderTopWidth:2,
            borderTopColor:'white',
            alignItems:'center'
    
        },
        
    })

export default ManageaExpenses;