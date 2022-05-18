import { createContext, useReducer } from "react";


export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpense:(expenses)=>{},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
      case "SET":
        const inverted=action.payload.reverse();
        return inverted;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
     
    case "UPDATE":
      const updatebleExpenseindex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatebleExpenseindex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatebleExpenseindex] = updatedItem;
      return updatedExpense;

    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer,[]);

  function setExpense(expenses){
    dispatch({type:"SET",payload:expenses});
  } 

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    setExpense:setExpense,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
