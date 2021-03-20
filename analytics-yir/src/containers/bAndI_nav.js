import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../device';

import NavTile from '../components/nav-tile';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';

import { bAndI_nav_tiles } from '../data/bAndI_nav_tiles'

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
margin-left: 4rem;
    
    width: 1800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const RightSideNext = styled.div`
    margin-top: 2rem;
    margin-right: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
`;

const LeftSideBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
`;


const BAndINav = () => (
    <>
    <Wrapper1>
        <LeftSideBack>
            <BackButton link = 'example-base-page.js'> </BackButton>
        </LeftSideBack>
        <TileWrap>
            {bAndI_nav_tiles.map(tile => (
                <NavTile section = {tile.section} link = {tile.link} img = {tile.img} width = "560px" height = "350px"></NavTile>
            ))}
        </TileWrap>
        <RightSideNext>
            <NextButton link = 'example-base-page.js' > </NextButton>
        </RightSideNext>
    </Wrapper1>
    </>
);

export default BAndINav;