import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #E4A969;
    background-size:cover;
    position: absolute;
    width: 100%;
    height: 100%;

`;

const ImagePill = styled.div`
    background-image: url(https://s3-alpha-sig.figma.com/img/7581/5952/29ffa02b7d343aa3d77552a1bfe7187c?Expires=1617580800&Signature=IJVrd4hwa53a-omemLDmPK44PECKlMiBudVB2kj9XmZaDEr6cpq-fzxw4d3W2jCKvJGa87l6~FMB8FR69DJflLfWuPfd3DE62zfVrpKX~ylTDDtTfILt~Z3EUP6tHFZf5CC-3EEWeZYHTrdiKLhHKbgMH9E3DOoFnXK3MqJS9gZpSCMnVPRC6eI2RY8H5y83Eq0GaZNAz16XBDhBuc2cnVFZwUSf-Q3N1Ehb0T0AI5w2feO50Sh8KMKfGKXNWkHEiBfFxtPUTltsWKeY~zyR2vTf9PVGKsFiYZ9S~SCEzCzNAxeWgez3SiOEjbFvmiEdiqeE882Xnc4Jq2zjesKOsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-repeat: no-repeat;

    height: 87vh;
    width: 80vw;

    background-size: cover;

    position: absolute;
    top:0;
    left:0;
    
    border-radius: 3.125rem;

`

const SectionPill = styled.div`
    background-color: white;
    position:absolute;
    padding: 0% 3%;
    border-radius: 2em;
    font-size: 2.5rem;
    font-weight: bold;
    width: 650px;
    height: 130px;
    right: -0.5%;
    bottom: -9%;
    
`;

const SectionText = styled.p`
    font-family: Raleway, sans-serif;
    color: black;
    font-style: normal;
    font-weight: 800;
    font-size: 100px;
    position: absolute;
    text-align:left;
    left: 12vw;
    top: -85%;
`;


const SectionBase = () => {
    return (
    <Link to={'/JournalismNav'}>
        <Wrapper>
        <ImagePill>
        <SectionPill>
            <SectionText>
                    revenue
            </SectionText>
        </SectionPill>
        </ImagePill>
        </Wrapper>
    </Link>
    );
};

export default SectionBase;

