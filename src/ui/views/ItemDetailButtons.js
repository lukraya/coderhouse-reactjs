import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemDetailButtons = () => {

    return (
        <>
            <button><NavLink to="/cart">Terminar mi compra</NavLink></button>
            <button><NavLink to="/">Seguir comprando</NavLink></button>
        </>
    )
}

export default ItemDetailButtons