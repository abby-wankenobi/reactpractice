import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => {
    return <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => props.clicked(index)}
      change={(e) => props.changed(e, person.id)} />
  });

export default persons;
