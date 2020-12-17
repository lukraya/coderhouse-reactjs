import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <p id="brand">Coder Kiosco</p>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><a href="#">Bebidas</a></li>
                    <li className="categorias"><a href="#">Galletitas</a></li>
                    <li className="categorias"><a href="#">Alfajores</a></li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;