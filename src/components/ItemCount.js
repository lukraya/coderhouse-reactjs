import React from 'react';
import './ItemCount.css';

const ItemCount = ({initial,aumentarInitial,disminuirInitial}) => {
    
    return (
        <div id="itemCount">
            <p>Alfajor Shot triple</p>
            <div id="seleccionCant">
                <button onClick={disminuirInitial} className="controles">-</button>
                <p>{initial}</p>
                <button onClick={aumentarInitial} className="controles">+</button>
            </div>
            <button id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;