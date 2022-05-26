import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;
    background-color: #2dbb2d;
    display: block;
    padding: 13px;
    margin: 20px auto;
    border: 2px solid #2dbb2d;
    border-radius: 8px;
    font-size: 28px;
    width: 80%;
    :hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
    @media(min-width: 1024px) {
        width: 50%;
    }
`;

const button = (props: any) => (<StyledButton onClick={props.clicked}>{props.children}</StyledButton>);

export default button;