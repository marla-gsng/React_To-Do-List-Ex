import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="addItem">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new task..."
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddItem;