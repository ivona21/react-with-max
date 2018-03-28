import React, { Component } from 'react';
import styles from './App.css';
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;     
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;