import React from 'react';

import Person from './Person/Person';

const persons = (props: any) => {
    console.log('Render Persons');
    return props.persons.map((person: any, index: any) => {
        return (<Person
            click={() => props.clicked(index)}
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event: any) => props.changed(event, person.id)} />
        );
    });
}

export default persons;