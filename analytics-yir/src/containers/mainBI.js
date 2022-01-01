import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background-image: url(https://yir-analytics.s3.amazonaws.com/image+2.png);
    background-size:cover;
    background-repeat: no-repeat;
    
    position: absolute;
    width: 120%;
    height: 120%;
    margin-top: -5rem;
    margin-left: -2rem;

`;
const BIPill = styled.div`
    position: absolute;
    width: 1143px;
    height: 60px;
    left: 58px;
    bottom: 20%;

    background: #7E9076;
    border-radius: 50px;
`;

const BIText = styled.p`
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    color: white;
    text-align: right;
    font-style: normal;
    font-weight: 650;
    font-size: 75px;
    position: absolute;
    left: 35px;
    top: -195%;
`;


const mainBI = () => {
    return (
    <Link to={'/BAndINav'}>
        <Wrapper>
            <BIPill>
                    <BIText>
                        Business & Innovations
                    </BIText>
                </BIPill>
        </Wrapper>
    </Link>
    );
};

export default mainBI;

