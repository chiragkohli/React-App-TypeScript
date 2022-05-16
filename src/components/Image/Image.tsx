import React from 'react';

const image = (props: any) => (
    <img
        src={props.path}
        alt={props.name} />);

export default image;