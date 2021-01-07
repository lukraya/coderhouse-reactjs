import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" exact id="brand">Coder Kiosco</NavLink>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><NavLink to="/category/Bebidas">Bebidas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Galletitas">Galletitas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Alfajores">Alfajores</NavLink></li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;