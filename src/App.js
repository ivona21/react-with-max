import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">       
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Ivona" age="25">My Hobbies: Programming</Person>
        <Person name="Kenan" age="25"/>
        <Person name="Mirjana" age="48"/>
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
