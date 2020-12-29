import React from 'react';
import './styles.css';

const ItemDetail = ({producto})=> {
    console.log(producto)
    return (<div id="itemDetail">
        <h4>Detalles de producto</h4>
        <p>{producto.title}</p>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <img src={producto.pictureURL} alt="Imagen de producto" height="50px" width="50px"></img>
    </div>)
}

export default ItemDetail;