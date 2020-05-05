import React, { createContext, useReducer, useEffect } from 'react';
import shoppingListReducer from './reducers/ShoppingListReducer';


export const ShoppingListContext = createContext();

const ShoppingListContextProvider = (props) => {

    const [shoppingList, dispatch] = useReducer(shoppingListReducer, [] ,() => {
        const localData = localStorage.getItem('Shopping List');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() => {
        localStorage.setItem('Shopping List', JSON.stringify(shoppingList))
    },[shoppingList])

    return(
        <ShoppingListContext.Provider value={{shoppingList, dispatch}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;