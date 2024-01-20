import React from 'react';

const TasksFilter = ({ allTodo, activeTodo, completedTodo }) => {
  const handleChangeSelected = (e) => {
    const btn = document.getElementsByClassName('btn');
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  };

  return (
    <ul className="filters" onClick={(e) => handleChangeSelected(e)}>
      <li>
        <button className="btn" onClick={() => allTodo()}>
          All
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => activeTodo()}>
          Active
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => completedTodo()}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
