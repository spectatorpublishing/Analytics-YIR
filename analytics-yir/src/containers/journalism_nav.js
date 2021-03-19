import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../device';

import NavTile from '../components/nav-tile';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';

import opinionImg from '../images/opinion.png';

const Wrapper1 = styled.div`
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    height: 150vh;

    @media ${device.tablet} {
        height: 175vh;
    }

    @media ${device.laptopS} {
        background: #251282;
        height: fit-content;
    }
`;

const TileWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

//NavTile = ( {section, link, img, width, height} )

const JournalismNav = () => (
    <>
    <Wrapper1>
        <BackButton link = 'example-base-page.js'> </BackButton>
        <TileWrap>
            <NavTile section = "opinion" link = "google.com" img = {opinionImg} width = "1000px" height = "1000px"></NavTile>
        </TileWrap>
        <NextButton link = 'example-base-page.js'> </NextButton>
    </Wrapper1>
    </>
);

export default JournalismNav;