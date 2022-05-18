import {View,Text,StyleSheet} from 'react-native';
import { GlobalStyles } from '../constants/styles';

function ExpensesSummary({expenses,periodName}){

    const expenseSum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0)
    return (
        <View  style={styles.container}>
            <Text  style={styles.textContainer1}>
                {periodName}
            </Text>
            <Text  style={styles.textContainer2}>
                {expenseSum.toFixed(2) } INR
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        padding:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:6,
        backgroundColor:GlobalStyles.colors.primary50
    },
    textContainer1:{
        fontSize:14,
        color:GlobalStyles.colors.primary400
    },
    textContainer2:{
        fontSize:12,
        fontWeight:'bold'
    }
})

export default ExpensesSummary;