import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    border: 1px solid #2dbb2d;
    padding: 8px;
    border-radius: 4px;
    width: 18%;
    display: block;
    box-sizing: border-box;
    font-size: larger;
    margin: 10px auto;
`;

const Input = (props: any) => {
    return (<InputStyled {...props} onChange={props.changed}/>);
};

export default Input;