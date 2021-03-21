import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background: url(https://s3-alpha-sig.figma.com/img/ed70/90d0/9d2b6e6cada5ad78cea431c3916ae69b?Expires=1616976000&Signature=MBELm9FcB01q8y9DWScKDeX~OdK-XEFSWplXtMnTjnX1FiY0F8tnahfjlusvAkmVVu26N0~-fQAFjOB-Q-JnhaVThsD-Un6pQ51mY6qxU873O~tTQZQWtMhtbu0ypdYFVmQYkduTTBdrz8duEsnuN5YEg0izW3tWHjqb48D~aNMas77HijoZobdarN4Y6Jf5m2~eqoT87-LpcTJSuu4aOnNLo-fdlMNTJh5kWo7Rx3XZOcpyZ9jRGHyC6kIuy~BkrVPA4sQyZz2FUlEoil7SkJ8EvTPKBUaT4-6~G7gffi04Khl9maEnB860O5m1R4pjU2H2HVe1AyUbpjuq7JK5eQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) rgba(37, 18, 130, .45);
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

    background: #7E9076;
    border-radius: 50px;
`;

const CreditsText = styled.p`
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    color: white;
    text-align: left;
    font-style: normal;
    font-weight: 650;
    font-size: 17px;
    position: absolute;
    left: 23px;
    top: -12%;
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

