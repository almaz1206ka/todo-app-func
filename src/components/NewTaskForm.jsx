import React, { useState } from 'react';

const NewTask = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setValue('');
  };

  return (
    <header onKeyUp={(e) => e.key === 'Enter' && handleSubmit(e)} className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
    </header>
  );
};

export default NewTask;
