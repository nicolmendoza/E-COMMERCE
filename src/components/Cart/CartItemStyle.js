import styled from 'styled-components'
// import {MdDeleteForever} from 'react-icons/md'

export const CartItemContainer = styled.div `
    width: 50%;
    display: flex;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 15px;
    position: relative;
    @media screen and (max-width: 1024px){
        width: 70%;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`
export const ImgSide = styled.img `
    display: block;
    height: 300px;
    width: 50%;
    padding: 20px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const InfoSide = styled.div `
    width: 50%;
    padding: 20px;
    margin-top: 40px;
    .desc{
        margin: 15px 0;
        line-height: 1.3;
        color: #888;
    }
    .price{
        font-weight: 700;
    }
    .price span{
        color: blue;
        font-size: 18px;
    }
    label{
        font-size: 20px;
        font-weight: bold;
    }
    input{
        width: 70px;
        padding: 2px 20px;
        border-radius: 5px;
        margin: 15px 0 15px 10px;
        font-size: 20px;
        font-weight: bold;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const RemoveIcon = styled() `
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
    color: red;
`