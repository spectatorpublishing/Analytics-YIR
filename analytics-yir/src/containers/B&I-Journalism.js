import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import BackButton from "../components/back-button";


const Wrapper = styled.div`
    background-color: rgba(64, 27, 27, 1);
    min-height: 100vh;
`
const ButtonWrapper = styled.div`
    padding: 1rem;
`;
const BIWrapper = styled.div`
    position: absolute;
    background-image: url("https://yir-analytics.s3.amazonaws.com/image+2.png");
    background-size: cover;
    border: 10px solid rgba(126, 144, 118, 1);
    width: 47vw;
    height: 57vh;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-radius: 3.125rem;

    :hover{
        width: 69vw;
        height: 80vh;
        z-index:8;
    }
`
const JournalismWrapper = styled.div`
    position: absolute;
    background-image: url("https://yir-analytics.s3.amazonaws.com/image+3.png");
    background-size: cover;
    border: 10px solid #6C719B;
    width: 50vw;
    height: 50vh;
    right: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 3.125rem;

    :hover{
        width: 69vw;
        height: 80vh;
    }
`
const BIPillButton = styled.div`
    position: absolute;
    width: 1143px;
    height: 60px;
    left: 110px;
    bottom: 7%;
    z-index:10;

    background: #7E9076;
    border-radius: 50px;
`;
const JournalismPillButton = styled.div`
    position: absolute;
    width: 832px;
    height: 60px;
    left: 650px;
    top: 13%;
    background: #6C719B;
    border-radius: 50px;
`;
const BIText = styled.p`
    text-transform: uppercase;
    color: white;
    text-align: right;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    position: absolute;
    left: 35px;
    top: -233%;
`;
const JournalismText = styled.p`
    text-transform: uppercase;
    color: white;
    text-align: right;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    position: absolute;
    left: 220px;
    top: -233%;
    
`;


const BIJournalism = ()=>{
    return (
        <Wrapper>
            <ButtonWrapper>
                <BackButton link={'/SectionInsights'}/>
            </ButtonWrapper>
            <Link to = {'/mainBI'}>
                <BIWrapper/>
                <BIPillButton>
                    <BIText>
                        Business & Innovations
                    </BIText>
                </BIPillButton>
            </Link>
            <Link to = {'/mainJournalism'}>
                <JournalismWrapper/>
                <JournalismPillButton>
                    <JournalismText>Journalism</JournalismText>
                </JournalismPillButton>
            </Link>
        </Wrapper>
    )
}
 

export default BIJournalism;