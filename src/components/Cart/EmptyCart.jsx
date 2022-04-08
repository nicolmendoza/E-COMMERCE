import React from 'react'
import {DivEmptyCart} from '../../style-components/elements/CartStyle.js'

const EmptyCart = () => {
  return (
    <DivEmptyCart className="container mt-5">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <h1>Your cart is currently empty</h1>
            </div>
        </div>
    </DivEmptyCart>
)
}

export default EmptyCart