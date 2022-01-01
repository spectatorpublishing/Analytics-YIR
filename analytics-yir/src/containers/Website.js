import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from '../data/website_data';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';

//title
//subtitle
//paragraphs
//graphics_urls
//notes
//next_link
//back_link

const BackWrap = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;

`
const NextWrap = styled.div`
    position: fixed;
    Bottom: 20px;
    right: 20px;

`
const Graphics = styled.img`
    overflow: hidden;
    padding-bottom: 20px;

`

const GraphicsWrap = styled.div`
    width: 1058px;
    margin-left: 71px;
    margin-top:15px;
    display:flex;
    flex-direction:column;

`

const TitleWrap = styled.div`
    width: 974px;
    height: 176px;
    margin-left: 71px;
    margin-top: 70px;
`
const Title = styled.div`
    font-family: Raleway, sans-serif; sans-serif;
    font-style: normal;
    font-weight: 650;
    font-size: 150px;
    line-height: 176px;
`

const SubtitleWrap = styled.div`
    width: 1211px;
    height: 90px;
    margin-left: 71px;
    margin-top: 25px; 

`

const Subtitle = styled.div`
    font-family: Raleway, sans-serif; sans-serif;
    font-style: normal;
    font-weight: 650;
    font-size: 70px;
    line-height: 82px;
`

const ParagraphWrap = styled.div`
    width: 1058px;
    margin-left: 71px;
    margin-top:15px;
`
const Paragraphs = styled.div`
    font-family: Raleway, sans-serif; sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    padding-bottom: 20px;
`

const Notes = styled.div`
    width: 1058px;
    margin-left: 71px;
    margin-top:15px;

    font-family: Raleway, sans-serif; sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;

`


const Website = () => (
    <>
    
    <BackWrap>
        <BackButton link = {data.back_link}></BackButton>
    </BackWrap>

    <TitleWrap>
        <Title>{data.title}</Title>
    </TitleWrap>

    <ParagraphWrap>
        {data.paragraphs.map(paragraph => (
            <Paragraphs>{paragraph}</Paragraphs>
        ))}
    </ParagraphWrap>

    <GraphicsWrap>
        {data.graphics_urls.map(url => (
            <Graphics src = {url}></Graphics>
        ))}
    </GraphicsWrap>
    
    <NextWrap>
        <NextButton link = {data.next_link}></NextButton>
    </NextWrap>

    </>
);

export default Website;