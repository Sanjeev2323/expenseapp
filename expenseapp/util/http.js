import axios from 'axios';

export async function StoreExpense(expenseData){
    const response=await axios.post('https://expense-manager-e4b39-default-rtdb.firebaseio.com/expenses.json',expenseData);
    const id=response.data.name;
    return id;
};

export async function fetchExpense(){
    const response=await axios.get('https://expense-manager-e4b39-default-rtdb.firebaseio.com/expenses.json');

    const expenses=[];

    for(const key in response.data){
        const expenseObj={
            id:key,
            amount:response.data[key].amount,
            date:new Date(response.data[key].date),
            description:response.data[key].description
        };
        expenses.push(expenseObj);
    }
 
    return expenses;
};


export function updateExpense(id,expenseData){
    return axios.put(`https://expense-manager-e4b39-default-rtdb.firebaseio.com/expenses/${id}.json`,expenseData);
};
export function deleteExpense(id){
    return axios.delete(`https://expense-manager-e4b39-default-rtdb.firebaseio.com/expenses/${id}.json`)
};