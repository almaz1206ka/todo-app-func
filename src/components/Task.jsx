import React, { useEffect, useState } from 'react';

const Task = ({ todos, toggleCompleted, isEditing, editTodo, deleteTask, updateDate }) => {
  const [value, setValue] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(value);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => updateDate(), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return todos.map((todo) => {
    const { title, id, completed, visible, createTime, edited } = todo;
    return (
      visible && (
        <li
          key={id}
          className={`${completed ? 'completed' : ''} ${edited ? 'editing' : ''}`}
          onKeyUp={(e) => e.key === 'Enter' && handleEditSubmit(e)}
        >
          <div className="view">
            <input className="toggle" checked={completed} type="checkbox" onChange={() => toggleCompleted(id)} />
            <label>
              <span className="description">{title}</span>
              <span className="created">created {createTime}</span>
            </label>
            <button className="icon icon-edit" onClick={() => isEditing(id)}></button>
            <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
          </div>
          {edited && (
            <input
              type="text"
              className="edit"
              autoFocus
              defaultValue={title}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </li>
      )
    );
  });
};

export default Task;
