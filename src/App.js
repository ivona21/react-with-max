import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ivona", age: 25 },
      { name: "Kenan", age: 25 },
      { name: "Mirjana", age: 48 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Kenan", age: 25 },
        { name: "Mirjana", age: 48 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 25 },
        { name: "Kenan", age: 25 },
        { name: "Mirjana", age: 48 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Ivoncica")}>
            Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Iiiiiii")}
          change={this.nameChangedHandler} >
            My Hobbies: Programming
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
