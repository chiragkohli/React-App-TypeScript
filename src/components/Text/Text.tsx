import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h1`
    font-size: 28px;
    color: #6a8ee1;
    font-family: cursive;
    margin: 0;
    @media(min-width: 768px) {
      font-size: 40px;
      margin: 0 0 20px 0;
    }
`;

const text = React.forwardRef((props: any, ref: any) => (
    <StyledText ref={ref}>{props.children}</StyledText>
  ));

export default text;