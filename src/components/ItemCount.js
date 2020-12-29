import React from 'react';
import './styles.css';

const ItemCount = ({initial,onAdd,onSubstract}) => {
   
    return (
        <div id="itemCount">
            <p>Alfajor Shot triple</p>
            <div id="seleccionCant">
                <button onClick={onSubstract} className="controles">-</button>
                <p>{initial}</p>
                <button onClick={onAdd} className="controles">+</button>
            </div>
            <button id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;