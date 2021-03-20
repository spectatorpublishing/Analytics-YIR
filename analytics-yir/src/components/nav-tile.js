import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const NavTitleWrapper = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    height: ${props => props.height};
    width: ${props => props.width};
    background-size: cover;
    position: relative;
    text-decoration: none;
    color: black;
    border-radius: 3.125rem;
    
    margin: 1rem;
    
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


const NavTile = ( {section, link, img, width, height} ) => {

    return (
        <Link to={link}>
            <NavTitleWrapper img = {img} width = {width} height = {height}>
                <PillShape>
                    <Sector>{section}</Sector>
                </PillShape>
            </NavTitleWrapper>
        </Link>
    );
}

export default NavTile;
