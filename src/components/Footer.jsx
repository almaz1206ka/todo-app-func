import React from 'react';

import TasksFilter from './TasksFilter';

const Footer = ({ activeTodoCount, allTodo, activeTodo, completedTodo, clearComplete }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`${activeTodoCount} ${activeTodoCount > 1 ? 'items' : 'item'}`}</span>
      <TasksFilter
        allTodo={allTodo}
        activeTodo={activeTodo}
        completedTodo={completedTodo}
        clearComplete={clearComplete}
      />
      <button className="clear-completed" onClick={() => clearComplete()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
