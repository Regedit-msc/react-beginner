// Import Dependencies

import React, { Component } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import Todos from "./Todos";

// Create App Container Component
class App extends Component {
  // Create State
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "go grocery shopping" },
    ],
  };

  // For deleting ToDo
  deleteToDo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  // To add a new todo to state
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  // Render method fo class components
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>

        {/* Pass todos array and pass deleteToDo function as a prop*/}
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />

        {/* Pass add ToDo function as a prop */}
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

// Export App component
export default App;
