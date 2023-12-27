// components/GroceryForm.js
import React, { useState } from 'react';

const GroceryForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add grocery..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Grocery</button>
    </form>
  );
};

export default GroceryForm;
