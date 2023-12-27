// components/GroceryList.js
import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ groceries, onDelete, onToggle }) => {
  return (
    <ul>
      {groceries.map((grocery) => (
        <GroceryItem
          key={grocery.id}
          grocery={grocery}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default GroceryList;
