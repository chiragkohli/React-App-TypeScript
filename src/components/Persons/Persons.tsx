import React from 'react';

import Person from './Person/Person';

const persons = (props: any) => {
    console.log('Render Persons');
    return props.persons.map((person: any) => {
        return (<Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            email={person.email} />
        );
    });
}

export default persons;