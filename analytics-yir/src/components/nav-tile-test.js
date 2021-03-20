import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const BigTileWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    border: 3px solid #251282;
    background: white;
    margin: 1rem;
`;


const NavTitleWrapper = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    
    width: inherit;
    background-size: contain;
    position: relative;
    text-decoration: none;
    color: black;
    border-radius: 3.125rem;
`;
const PillShape = styled.div`
    background-color: white;
    position:absolute;
    padding: 0% 3%;
    border-radius: 1.25em;
    font-size: 2.5rem;
    font-weight: bold;
    width: 282px;
    height: 58px;
    left: 4%;
    bottom: 3%;
    text-align: center;
`;
const Sector = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 47px;
    letter-spacing: 0em;
`;


const NavTileTest = ( {section, link, img} ) => {

    return (
        <BigTileWrap>
            <Link to={link}>
                <NavTitleWrapper img = {img}>
                    <PillShape>
                        <Sector>{section}</Sector>
                    </PillShape>
                </NavTitleWrapper>
            </Link>
        </BigTileWrap>
    );
}

export default NavTileTest;
