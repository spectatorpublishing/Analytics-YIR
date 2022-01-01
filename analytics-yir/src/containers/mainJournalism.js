import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background-image: url(https://yir-analytics.s3.amazonaws.com/image+3.png);
    background-size:cover;
    background-repeat: no-repeat;
    
    position: absolute;
    margin-top: -10rem;
    margin-left: -3rem;
    width: 120%;
    height: 120%;
`;
const JournalismPill = styled.div`
    position: absolute;
    width: 970px;
    height: 60px;
    left: 425px;
    top: 320px;
    background: #6C719B;
    border-radius: 50px;
`;
const JournalismText = styled.p`
    text-transform: uppercase;
    color: white;
    text-align: right;
    font-style: normal;
    font-weight: 650;
    font-size: 80px;
    position: absolute;
    right: 80px;
    top: -230%;
    
`;


const mainJournalism = () => {
    return (
    <Link to={'/JournalismNav'}>
        <Wrapper>
            <JournalismPill>
                    <JournalismText>
                        Journalism
                    </JournalismText>
                </JournalismPill>
        </Wrapper>
    </Link>
    );
};

export default mainJournalism;

