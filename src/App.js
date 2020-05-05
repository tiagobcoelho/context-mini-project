import React from 'react';
import './App.css';
import ShoppingListContextProvider from './contexts/ShoppingListContext'
import List from './components/List'
import AddItemInput from './components/AddItemInput'

function App() {
  return (
    <div className="App">
      <ShoppingListContextProvider>
        <List />
        <AddItemInput />
      </ShoppingListContextProvider>
    </div>
  );
}

export default App;
