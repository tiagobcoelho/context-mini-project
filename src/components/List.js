
import React, { useContext } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext'
import ListItem from './ListItem'

const List = () => {
    const { shoppingList } = useContext(ShoppingListContext)
    return(
        <div className='list'>
            <h1>Shopping List</h1>
            {shoppingList.length ? 
            <ul>
                {shoppingList.map( listItem => {
                    return <ListItem listItem={listItem} key={listItem.id} />
                })}
            </ul> :
            <div className='empty'>No items</div>
            } 
        </div>

    )
}

export default List;