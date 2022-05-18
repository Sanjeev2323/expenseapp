import { View,StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";



function ExpensesOutput({ expenses, expenseperiod }) {
  return (
    <View  style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expenseperiod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary200
    }
})

export default ExpensesOutput;
