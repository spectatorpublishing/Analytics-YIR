import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../device';

import NavTile from '../components/nav-tile';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';

import { journalism_nav_tiles } from '../data/journalism_nav_tiles'

const Wrapper1 = styled.div`
    background: white;
    height: 150vh;

    @media ${device.tablet} {
        height: 175vh;
    }

    @media ${device.laptopS} {
        height: fit-content;
    }
`;

const TileWrap = styled.div`
    margin-left: 3rem;
    margin-top: 2rem;
    
    width: 95vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const RightSideNext = styled.div`
    position: fixed;
    Bottom: 20px;
    right: 75px;
    
`;

const LeftSideBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    margin-left: 5rem;
    
`;


const JournalismNav = () => (
    <>
    <Wrapper1>
        <LeftSideBack>
            <BackButton link = '/BIJournalism'> </BackButton>
        </LeftSideBack>
        <TileWrap>
            {journalism_nav_tiles.map(tile => (
                <NavTile section = {tile.section} link = {tile.link} img = {tile.img} width = "25vw" height = "35vh"></NavTile>
            ))}
        </TileWrap>
        <RightSideNext>
            <NextButton link = '/BAndINav' > </NextButton>
        </RightSideNext>
    </Wrapper1>
    </>
);

export default JournalismNav;