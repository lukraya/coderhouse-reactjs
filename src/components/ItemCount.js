import React from 'react';
import './styles.css';

const ItemCount = ({onAdd, onSumar, onRestar, initial}) => {
    
    return (
        <div id="itemCount">
            <div id="seleccionCant">
                <button onClick={onRestar} className="controles">-</button>
                <p>{initial}</p>
                <button onClick={onSumar} className="controles">+</button>
            </div>
            <button id="agregar" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;