// Import react as a dependency

import React from "react";

// Create a UI component Todo and pass it the props from app Container
const Todos = ({ todos, deleteToDo }) => {
  // Create a todoList where an if statement will be used to determine what to display
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteToDo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You don't have any todos left. Yay!</p>
  );
  /* render the todo list  */
  return <div className="todos collection">{todoList}</div>;
};

// Export Todos Component
export default Todos;
