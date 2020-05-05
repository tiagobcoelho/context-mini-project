import React, { useContext, useState } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext';


const AddInput = () => {
    const { dispatch } = useContext(ShoppingListContext)
    const [newItem, setNewItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', item: newItem})
        setNewItem('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add new item' value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
            <button type='submit'>add item</button>
        </form>
    )
}

export default AddInput;

