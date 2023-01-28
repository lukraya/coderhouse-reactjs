import React from 'react'
import { NavLink } from 'react-router-dom'

const CartOptions = ({precioTotal, clear}) => {

    return (
        <>
            <p>Total: ${precioTotal()}</p>
            <button onClick={clear} className="botonCart">Vaciar el carrito</button>
            <button><NavLink to="/checkout" className="botonCart">Comprar</NavLink></button>
        </>
    )
}

export default CartOptions