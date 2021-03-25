import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background-image: url(https://s3-alpha-sig.figma.com/img/93ee/3e5e/1005c31a41431cc8bacd5f3743a79315?Expires=1616976000&Signature=IVkJ0t2LDOYW0-cpgUHLhXtlAnjruuhHGGDyN-YJ~a2HWZGojCiul~8dpEbsmykRG8Y-nwxUH~oQuZCiS7bIWa-BHp2-IrD-HUsFDT-5iSQa9fXvM4LFW4EO~9zkv2JClYQwMajnB5cQZAuQgwvA1rBuIMepFADhkBi9JM7mCKic7aUjrp886kab8hD2tfUjTJErzhGJs2J2-yzyuPm~-Nqr3I0-bbEp-7N42iRtlMGkHuznwb44LCwDW7BGqvHfkKG183jxexXSt21HpkFOvQLQEC01yfmZznatDJrKHI0zkzf4B-u-2ZRV-PTb-NmtRHHGSLENdj12Smw1woextA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-size:cover;
    background-repeat: no-repeat;
    
    position: absolute;
    width: 100%;
    height: 100%;
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

