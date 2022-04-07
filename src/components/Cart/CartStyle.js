import styled from 'styled-components'

export const CartContainer = styled.div `
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CartSummary = styled.div `
    width: 50%;
    text-align: center;
    padding: 20px;
    margin: 60px 0;
    border-radius: 10px;
    box-shadow: 2px 2px 7px blue;
    h1{
        text-transform: uppercase;
        letter-spacing: 3px;
        padding: 10px;
        border-bottom: 2px solid blue;
    }
    .total_price_amount{
        margin: 25px 0;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
    .totalPrice{
        font-weight: 700;
    }
    .proced_btn{
        padding: 7px 10px;
        border-radius: 5px;
        color: #fff;
        text-transform: capitalize;
        font-weight: 500;
        background-color: blue;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`