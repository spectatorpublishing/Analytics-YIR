import React from 'react';
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: #FFFFFF;
    border: 3px solid #000000;
    width: 287px;
    height: 59px;
    cursor: pointer;
    border-radius: 100px;
    `;

const TextWrapper = styled.div`
    font: Raleway;
    font-style: normal;
    font-weight: 650;
    color: black;
    text-align: left;
    line-height: 0;
    padding-left: 1.5rem;
    justify-content: left;

`;

const Words = styled.div`
    font-size:30px;
`;

const text = 'back'

export const BackButton = ({link}) => {
    return (
        <Link to={link}>
            <Button>
                <TextWrapper><Words>{text}</Words></TextWrapper>
            </Button>
        </Link>
    )
};

export default BackButton