import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ivona", age: 25 },
      { id: 2, name: "Kenan", age: 25 },
      { id: 3, name: "Mirjana", age: 48 }
    ],
    otherState: "some other value",
    showPersons: false
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

  deletePersonHandler = (personIndex) => {   
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                />
               )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
