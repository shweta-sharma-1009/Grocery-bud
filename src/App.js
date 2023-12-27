// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import GroceryList from './Components/GroceryList';  // Updated import
import GroceryForm from './Components/GroceryForm';  // Updated import

// ... rest of the code ...


const App = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    // Load groceries from local storage on component mount
    const savedGroceries = JSON.parse(localStorage.getItem('groceries')) || [];
    setGroceries(savedGroceries);
  }, []);

  useEffect(() => {
    // Save groceries to local storage whenever it changes
    localStorage.setItem('groceries', JSON.stringify(groceries));
  }, [groceries]);

  const addGrocery = (text) => {
    const newGrocery = {
      id: new Date().getTime().toString(),
      text,
      completed: false,
    };
    setGroceries([...groceries, newGrocery]);
  };

  const deleteGrocery = (id) => {
    setGroceries(groceries.filter((grocery) => grocery.id !== id));
  };

  const toggleGrocery = (id) => {
    setGroceries(
      groceries.map((grocery) =>
        grocery.id === id ? { ...grocery, completed: !grocery.completed } : grocery
      )
    );
  };

  return (
    <div className="App">
      <h1>Grocery Bud</h1>
      <GroceryForm onAdd={addGrocery} />
      <GroceryList groceries={groceries} onDelete={deleteGrocery} onToggle={toggleGrocery} />
    </div>
  );
};

export default App;
