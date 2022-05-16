import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;
    background-color: #2dbb2d;
    display: block;
    padding: 20px;
    margin: 20px auto;
    border: none;
    border-radius: 8px;
    font-size: xxx-large;
    width: 50%;
    :hover {
        background-color: white;
        color: black;
        cursor: pointer;
        border: 4px solid #2dbb2d;
    }
`;

const button = (props: any) => (<StyledButton onClick={props.clicked}>{props.children}</StyledButton>);

export default button;