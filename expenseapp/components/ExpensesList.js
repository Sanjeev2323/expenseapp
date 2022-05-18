import {View,FlatList,Text} from 'react-native';
import ExpenseItem from './expenseItem';

function renderItemHandler(itemData){
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({expenses}){
    return (
      
           <FlatList data={expenses} renderItem={renderItemHandler}  keyExtractor={(item)=>item.id} />
      
    );
}

export default ExpensesList;