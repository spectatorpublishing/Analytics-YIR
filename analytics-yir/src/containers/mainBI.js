import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
    background-image: url(https://s3-alpha-sig.figma.com/img/9d40/118c/18b2b820bda5150e29ce0e258ad5e502?Expires=1616976000&Signature=KAT2nAAG4Y0uwtJeNyziaTPqPjzSYvXFNyMraw-POyabFI8f1kV~iErZAJkkgqu9M6ZUjOsso~To4tfdUskYZgjPsvMQcwBUgQa-MkhQpRUlY8M5ywfhqb-n4xQOTcwbu6wtYaQB5sc8vlJrosqyF6phsnC9AkutviMdXqS~8~6JOlFmshY0TduKLZ~-SE1ESGzFFlxDYp5XDJ1J7e0kKVI2mv4aM35bktojhPuZuWxcRH3HQN6XbVMHICYje0AhO-jt0NUJAb8H~YvO668-s6L-RZhHuFFstZnQI2WGSxOJb8-aQBUJ1DlYtmR6Th3QwYIVRh35PVnKUpkzBtcngQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-size:cover;
    background-repeat: no-repeat;
    
    position: absolute;
    width: 100%;
    height: 100%;
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
    top: -180%;
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

