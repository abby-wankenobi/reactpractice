import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "asd", name: "Abby", age: 28 },
      { id: "asldfj", name: "Zach", age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              change={(e) => this.nameChangedHandler(e, person.id)} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
        // <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangedHandler}/> */}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }



    return (

        <div className={classes.App}>
          <h1>React App</h1>
          <p className={assignedClasses.join(" ")}>App is working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
        </div>


    );
  }
}

export default App;
