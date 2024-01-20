import React from 'react';

import Task from './Task';

const TaskList = ({ todos, toggleCompleted, isEditing, editTodo, deleteTask, updateDate }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        <Task
          todos={todos}
          toggleCompleted={toggleCompleted}
          isEditing={isEditing}
          editTodo={editTodo}
          deleteTask={deleteTask}
          updateDate={updateDate}
        />
      </ul>
    </section>
  );
};

export default TaskList;
