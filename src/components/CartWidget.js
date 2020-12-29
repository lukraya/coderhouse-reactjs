import React from 'react';
import './styles.css';
import cartIcon from './media/cartIcon.jpg';

const CartWidget = () => <a href="#" id="cartWidget">
    <img src={cartIcon} alt="Icono de carrito" width="30px" height="30px"></img>
</a>;

export default CartWidget;