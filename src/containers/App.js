import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props)
    this.state = {
      persons: [
        { id: "asd", name: "Abby", age: 28 },
        { id: "asldfj", name: "Zach", age: 30 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // state = {
  //   persons: [
  //     { id: "asd", name: "Abby", age: 28 },
  //     { id: "asldfj", name: "Zach", age: 30 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // or (updating state immutably)
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
