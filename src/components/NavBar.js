import React from 'react';
import './NavBar.css';

let NavBar = () => <nav>
    <p id="brand">Coder Kiosco</p>
    <ul id="menu">
        <li className="categorias"><a href="#">Bebidas</a></li>
        <li className="categorias"><a href="#">Galletitas</a></li>
        <li className="categorias"><a href="#">Alfajores</a></li>
    </ul>
</nav>;

export default NavBar;