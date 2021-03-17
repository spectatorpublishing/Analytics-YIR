import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../device';

const Background = styled.div`
    background-size: contain;
    background-image: url("../img/BI.png");
`;

const mainBI = () => {
    return (
        <Link to="/BINav">
            <Background></Background>
        </Link>
    );
};

export default mainBI;

