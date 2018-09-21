import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Abby", age: 28 },
      { name: "Zach", age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = () => {
    console.log('was clicked')
    this.setState({
      persons: [
        { name: "Abigail", age: 28 },
        { name: "Zachary", age: 30 }
      ]
     })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: "Abigail", age: 28 },
        { name: e.target.value, age: 30 }
      ]
     })
  }

  togglePersonHandler = () => {

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {
          this.state.showPerson ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangedHandler}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;