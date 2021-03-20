import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../device';

const Background = styled.div`
    background-size: contain;
    background-image: url("../img/journal.png");
`;

const mainBI = () => {
    return (
        <Link to="/JournalismNav">
            <Background></Background>
        </Link>
    );
};

export default mainBI;

