import React from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/color-context'

const StyledButton = styled.button`
    color: white;
    background-color: #2dbb2d;
    display: block;
    padding: 20px;
    margin: 123px auto;
    border: 4px solid #2dbb2d;;
    border-radius: 8px;
    font-size: 22px;
    width: 80%;
    :hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
    @media(min-width: 768px) {
        font-size: 2rem;
        width: 50%;
        margin: 166px auto;
    }
    @media(min-width: 1024px) {
        margin: 247px auto;
    }
`;

const Text = (props: any) => {
    let colorContext = React.useContext(ColorContext);
    return (<StyledButton onClick={colorContext.changeColor}>{props.children}</StyledButton>)};

export default Text;