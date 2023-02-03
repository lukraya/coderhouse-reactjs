import React from 'react'
import { NavLink } from 'react-router-dom'

const CartEmpty = () => {

    return (
        <>
            <p>Su carrito está vacío.</p>
            <button><NavLink to="/">Ir a la tienda</NavLink></button>
        </>
    )
}

export default CartEmpty