import React from 'react';
import styled from 'styled-components';
import Image from '../../Image/Image';

const StyledDiv = styled.div`
    width: 20%;
    margin: 10px;
    background-color: rebeccapurple;
    border-radius: 5px;
    padding: 16px;
    text-align: center;
    display: inline-block;
`;
const StyledStrong = styled.strong`
    display: block;
    margin-top: 10px;
`;

const Person = (props: any) => {
    const path = `https://robohash.org/${props.id}?set=set2&size=180x180`;
    return (
        <StyledDiv>
            <Image
                path={path}
                name={props.name} />
            <StyledStrong>{props.name}</StyledStrong>
            <p>{props.email}</p>
        </StyledDiv>
    );
};

export default Person;