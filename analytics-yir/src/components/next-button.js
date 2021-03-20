import React from 'react';
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: #000000;
    border: 3px solid #000000;
    width: 287px;
    height: 59px;
    cursor: pointer;
    border-radius: 100px;

    margin: 1rem;

    `;

const TextWrapper = styled.div`
    font: Raleway;
    font-style: normal;
    font-weight: 650;
    color: white;
    text-align: right;
    line-height: 20px;
    padding: 2.0rem;
    justify-content: right;
`;

const Words = styled.div`
    font-size:30px;
`;

const text = 'next'

export const NextButton = ({link}) => {
    return (
        <Link to={link}>
            <Button>
                <TextWrapper><Words>{text}</Words></TextWrapper>
            </Button>
        </Link>
    )
};

export default NextButton