// components/GroceryItem.js
import React from 'react';

const GroceryItem = ({ grocery, onDelete, onToggle }) => {
  return (
    <li className={`grocery ${grocery.completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={grocery.completed}
          onChange={() => onToggle(grocery.id)}
        />
        <span>{grocery.text}</span>
      </div>
      <button onClick={() => onDelete(grocery.id)}>Delete</button>
    </li>
  );
};

export default GroceryItem;
