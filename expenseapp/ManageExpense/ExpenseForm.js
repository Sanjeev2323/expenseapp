import { View, StyleSheet, Text ,Alert} from "react-native";
import Input from "./input";

import {useState} from  'react';
import Button from "../UI/Button";

function ExpenseForm({submitBUttonLabel,onCancel,onSubmit,defaultValues}) {

   const[inputValue,setInputValue]= useState({
       amount:defaultValues? defaultValues.amount.toString():'',
       date:defaultValues?defaultValues.date.toISOString().slice(0,10):'',
       description:defaultValues? defaultValues.description:'',

   })
  function inputChangeHolder(inputIdentifier,enteredValue) {
      setInputValue((currentInput)=>{
          return {...currentInput,[inputIdentifier]:enteredValue}
      })
  }

  function submitHandler(){
      const expenseData={
          amount:+inputValue.amount,
          date:new Date(inputValue.date),
          description:inputValue.description
      }

      const amountValid=!isNaN(expenseData.amount) && expenseData.amount>0;
      const dateValid=expenseData.date.toString()!=='Invalid Date';
      const descriponValid=expenseData.description.trim().length>0;
     
      if(!amountValid || !dateValid || !descriponValid){
        Alert.alert('input incorrect','please check your input')
          return;
      }
      onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense</Text>
      <View style={styles.container}>
        <Input
          style={styles.rowInput}
          label="amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHolder.bind(this,'amount'),
            value:inputValue.amount
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          textInputConfig={{
            keyboardType: "default",
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangeHolder.bind(this,'date'),
            value:inputValue.date
          }}
        />
      </View>
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          // autoCaptitalize:'none',
          //autoCorrect:false
          onChangeText: inputChangeHolder.bind(this,'description'),
          value:inputValue.description
         
         
        }}
        />
        <View style={styles.container3}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>cancel</Button>
        <Button style={styles.button}  onPress={submitHandler}>{submitBUttonLabel}</Button>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    marginVertical: 24,
    textAlign: "center",
  },
  container3:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
button:{
    minWidth:120,
    margin:2
}
});

export default ExpenseForm;
