import React from 'react'
import CartItem from './CartList'
import { useDispatch, useSelector } from "react-redux";

const CartList = () => {   // We get value from Cart.js as props
    const products = useSelector((products) => products.cart);

    return (
        <div className="container-fluid">
            {products.map(item => {
                return <CartItem key={item.id} item={item}  />    
            })}
        </div>
    )
}

export default CartList