import React, { Component } from "react";
import AddNinja from "./AddNewPerson";
import "./App.css";
import Ninjas from "./People";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ayo", age: "10", belt: "yellow", id: 1 },
      { name: "Ayo", age: "20", belt: "yellow", id: 2 },
      { name: "Ayo", age: "50", belt: "yellow", id: 3 },
      { name: "Ayo", age: "40", belt: "yellow", id: 4 },
    ],
  };
  addNinja = (ninja) => {
    ninja.id = Math.random() * (this.state.ninjas.length + 1);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Add new ninja.</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
