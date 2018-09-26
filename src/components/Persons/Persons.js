import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props)
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
    // return nextProps.person !== this.props.persons;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] Inside componentDidReceiveProps')
  }

  render () {

    console.log('[Persons.js] render()');

    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        change={(e) => this.props.changed(e, person.id)} />
    });
  }
}


export default Persons;
