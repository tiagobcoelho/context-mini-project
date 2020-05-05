import uuid from 'uuid/dist/v1';

const shoppingListReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
          return [...state, {
              item: action.item,
              id: uuid()
          }]
        case 'REMOVE_ITEM':
            return state.filter( item => item.id !== action.id)
        default:
            return state
    }
}

export default shoppingListReducer