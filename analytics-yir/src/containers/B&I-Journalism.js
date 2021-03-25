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
    background-image: url("https://s3-alpha-sig.figma.com/img/9d40/118c/18b2b820bda5150e29ce0e258ad5e502?Expires=1616976000&Signature=KAT2nAAG4Y0uwtJeNyziaTPqPjzSYvXFNyMraw-POyabFI8f1kV~iErZAJkkgqu9M6ZUjOsso~To4tfdUskYZgjPsvMQcwBUgQa-MkhQpRUlY8M5ywfhqb-n4xQOTcwbu6wtYaQB5sc8vlJrosqyF6phsnC9AkutviMdXqS~8~6JOlFmshY0TduKLZ~-SE1ESGzFFlxDYp5XDJ1J7e0kKVI2mv4aM35bktojhPuZuWxcRH3HQN6XbVMHICYje0AhO-jt0NUJAb8H~YvO668-s6L-RZhHuFFstZnQI2WGSxOJb8-aQBUJ1DlYtmR6Th3QwYIVRh35PVnKUpkzBtcngQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
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
    background-image: url("https://s3-alpha-sig.figma.com/img/93ee/3e5e/1005c31a41431cc8bacd5f3743a79315?Expires=1616976000&Signature=IVkJ0t2LDOYW0-cpgUHLhXtlAnjruuhHGGDyN-YJ~a2HWZGojCiul~8dpEbsmykRG8Y-nwxUH~oQuZCiS7bIWa-BHp2-IrD-HUsFDT-5iSQa9fXvM4LFW4EO~9zkv2JClYQwMajnB5cQZAuQgwvA1rBuIMepFADhkBi9JM7mCKic7aUjrp886kab8hD2tfUjTJErzhGJs2J2-yzyuPm~-Nqr3I0-bbEp-7N42iRtlMGkHuznwb44LCwDW7BGqvHfkKG183jxexXSt21HpkFOvQLQEC01yfmZznatDJrKHI0zkzf4B-u-2ZRV-PTb-NmtRHHGSLENdj12Smw1woextA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
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