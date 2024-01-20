import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

import NewTask from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

const TaskContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      {
        title: todo,
        id: uuidv4(),
        visible: true,
        completed: false,
        edited: false,
        date: new Date(),
        createTime: 'now',
      },
      ...todos,
    ]);
  };

  const toggleCompleted = (id) => {
    const selectedTodo = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(selectedTodo);
  };

  const isEditing = (id) => {
    const selectedTodo = todos.map((todo) => (todo.id === id ? { ...todo, edited: true } : { ...todo, edited: false }));
    setTodos(selectedTodo);
  };

  const updateDate = () => {
    if (todos.length > 0) {
      const updateTodo = todos.map(
        (todo) =>
          todo && {
            ...todo,
            createTime: formatDistanceToNow(todo.date, { addSuffix: true, includeSeconds: true }),
          }
      );
      setTodos(updateTodo);
    }
  };

  const editTodo = (todoTitle) => {
    const updateTodo = todos.map((todo) =>
      todo.edited === true
        ? {
            ...todo,
            title: todoTitle,
            edited: false,
            date: new Date(),
            createTime: 'now',
          }
        : todo
    );
    setTodos(updateTodo);
  };

  const deleteTask = (id) => {
    const selectedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(selectedTodo);
  };

  const activeTodoCount = todos.filter((todo) => todo.completed === false).length;

  const clearComplete = () => {
    const filteredTodo = todos.filter((todo) => todo.completed !== true);
    setTodos(filteredTodo);
  };

  const allTodo = () => {
    const updateTodo = todos.map((todo) => todo && { ...todo, visible: true });
    setTodos(updateTodo);
  };

  const activeTodo = () => {
    const updateTodo = todos.map((todo) =>
      todo.completed === false ? { ...todo, visible: true } : { ...todo, visible: false }
    );
    setTodos(updateTodo);
  };

  const completedTodo = () => {
    const updateTodo = todos.map((todo) =>
      todo.completed === true ? { ...todo, visible: true } : { ...todo, visible: false }
    );
    setTodos(updateTodo);
  };

  return (
    <section className="todoapp">
      <NewTask addTodo={addTodo} />
      <TaskList
        todos={todos}
        toggleCompleted={toggleCompleted}
        isEditing={isEditing}
        editTodo={editTodo}
        deleteTask={deleteTask}
        updateDate={updateDate}
      />
      <Footer
        activeTodoCount={activeTodoCount}
        allTodo={allTodo}
        activeTodo={activeTodo}
        completedTodo={completedTodo}
        clearComplete={clearComplete}
      />
    </section>
  );
};

export default TaskContainer;
