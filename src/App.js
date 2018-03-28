import React, { Component } from 'react';
import styles from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class App extends Component {
  state = {
    persons: [
      { id: "lkdjfldsjc", name: "Ivona", age: 25 },
      { id: "skdcjois", name: "Kenan", age: 25 },
      { id: "guorndslk", name: "Mirjana", age: 48 },
      { id: "cesoid", name: "Stela", age: 25 },
      { id: "csoidf", name: "Aida", age: 21 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}                  
                  change={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            )
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.Red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.Bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button    
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
