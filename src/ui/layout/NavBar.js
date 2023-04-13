import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { contexto } from '../../CartContext';
import CartWidget from '../views/CartWidget';

const NavBar = () => {
    const {cart} = useContext(contexto)

    return (
        <header>
            <nav>
                <NavLink to="/" exact id="brand">Coder Kiosco</NavLink>
                <div id="menuDerecha">
                    <ul id="menu">
                        <li className="categorias"><NavLink to="/category/Bebidas">Bebidas</NavLink></li>
                        <li className="categorias"><NavLink to="/category/Galletitas">Galletitas</NavLink></li>
                        <li className="categorias"><NavLink to="/category/Alfajores">Alfajores</NavLink></li>
                    </ul>
                    {cart.length > 0 ? <CartWidget/> : null}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;