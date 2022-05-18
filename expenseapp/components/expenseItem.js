import {Pressable,View,Text,StyleSheet} from 'react-native';
import { GlobalStyles } from '../constants/styles';
import exportDate from '../util/date';

import {useNavigation} from '@react-navigation/native'

function ExpenseItem({id,description,amount,date}){
    const navigation=useNavigation();

    function expensePressHandler(){
        navigation.navigate('ManageExpense',{
            expenseId:id
        });

    }


    return (
        <Pressable  onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed} >
            <View style={styles.container1}>
                <View>
                    
                    <Text  style={[styles.textContainer,styles.descriptionBox]}>{description}</Text>
                    <Text style={styles.textContainer}>{exportDate(date)}</Text>
                </View>
                <View style={styles.amountBox}>
                    <Text  style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles=StyleSheet.create({
    container1:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4


    },
    pressed:{
        opacity:0.75
    },
    textContainer:{
        color:GlobalStyles.colors.primary50

    },
    descriptionBox:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'

    },
    amountBox:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80

    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
})