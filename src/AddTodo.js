// Import react and component for stateful component

import React, { Component } from "react";

// Create a class AddTodo
class AddTodo extends Component {
  // Initialize state
  state = {
    content: "",
  };

  // For handling change in input field
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  // For handling submit event
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  // render method
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo :</label>
          <input
            type="text"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

// Export Component
export default AddTodo;
