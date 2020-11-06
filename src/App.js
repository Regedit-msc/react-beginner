// Import Dependencies

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

// Create the app Component
class App extends Component {
  /* Render the other child components  */
  render() {
    return (
      //  BrowserRouter passes props down to the Route Component
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// Export App component
export default App;
