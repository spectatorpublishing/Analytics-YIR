import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background: url(https://yir-analytics.s3.amazonaws.com/image+1.png) rgba(37, 18, 130, .45);
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
`;
const YIRPill = styled.div`
    position: absolute;
    width: 900px;
    height: 60px;
    right:75px;
    top: 70px;

    background: #9B6C6C;
    border-radius: 50px;
`;
const YIRText = styled.p`
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    color: white;
    text-align: right;
    font-style: normal;
    font-weight: 650;
    font-size: 80px;
    position: absolute;
    left: 175px;
    top: -200%;
`;

const CreditsPill = styled.div`
    position: absolute;
    width: 900px;
    height: 60px;
    right:75px;
    bottom: 70px;

    background:  #71a583;
    border-radius: 50px;
`;

const CreditsText = styled.p`
    font-family: Raleway, sans-serif;
    color: white;
    text-align: left;
    font-style: normal;
    font-weight: 650;
    font-size: 20px;
    position: absolute;
    left: 30px;
    top: -18%;
`;

const mainYIR = () => {
    return (
    <Link to={'/Introduction'}>
        <Wrapper>
            <YIRPill>
                    <YIRText>
                        Year In Review
                    </YIRText>
            </YIRPill>
            <CreditsPill>
                <CreditsText>
                    Production by Engagement. Data visualizations by Graphics. Website design by Roxane Carre and section designs by Newsroom Development. Website coding by Engineering.
                </CreditsText>
            </CreditsPill>
        </Wrapper>
    </Link>
    );
};

export default mainYIR;

