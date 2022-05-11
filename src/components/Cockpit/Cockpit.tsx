import React from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

const StyledButton = styled.button<any>`
  background-color: ${props => props.alt === 'true' ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt === 'true' ? 'salmon' : 'lightgreen'};
    color: black;
  },
`;

const Cockpit = (props: any) => {
  const context = React.useContext(AuthContext);
  return (
    <div>
      <h1>My First React Application</h1>
      <p>Hello Application!</p>
      <StyledButton
        alt={props.showPersons.toString()}
        onClick={props.clicked}>Toggle Person!</StyledButton>
      <button onClick={context.login}>Login</button>
    </div>
  );
};

export default Cockpit;