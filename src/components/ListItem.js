import React, { useContext } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext';

const ListItem = (props) => {
    const { listItem } = props;
    const { dispatch } = useContext(ShoppingListContext);
    return(
    <li onClick={() => dispatch({type:'REMOVE_ITEM', id:listItem.id})}>{listItem.item}</li>
    )
}

export default ListItem