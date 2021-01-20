import React from 'react';
import './styles.css';
import cartIcon from './media/cartIcon.jpg';
import { NavLink } from 'react-router-dom';

const CartWidget = () => <NavLink to="/cart" id="cartWidget">
    <img src={cartIcon} alt="Icono de carrito" width="30px" height="30px"></img>
</NavLink>;

export default CartWidget;