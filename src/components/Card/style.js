import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 280px;
    width: 210px;
    border: 0.7px solid lightgrey;
    display: inline-block;
    margin: 20px;
    border-radius: 10px;
    padding: 0px;
    background-color: #DAE0F7;
    position:relative;
    overflow: hidden;
`;

export const CardNested = styled.div`
    height: 194px;
    width: 135px;
    background-color:white;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: block;
    border: 0.5px solid lightgrey;
    border-radius: 5px;
`;

export const Status = styled.div`
    height: 16px;
    width: 52px;
    left: 15px;
    top: 12px;
    font-family: Roboto, sans-serif;
    border: 0.5px solid lightgrey;
    border-radius: 15px;
    background-color: rgba(196, 196, 196, 0.76);
    position: absolute;
    z-index: 3;
    text-align: center;
    font-weight: 200;
`;

export const TextBox = styled.div`
    width: 100%;
    top: 20px;
    height: 100%;
    position: relative;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    z-index: 0;
`;

export const TitleName = styled.div`
    position:relative;
    top: -255px;
    z-index: 2;
    font-family:Roboto, sans-serif;
    font-size: 16px;
    color: rgba(38, 57, 90, 1);
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: left;
    left: 13px;
    width: 100%;
`;

export const Data = styled.div`
    left:14px;
    top: -251px;
    position:relative;
    font-size: 12px;
    color: rgba(38, 57, 90, 1);
`;
