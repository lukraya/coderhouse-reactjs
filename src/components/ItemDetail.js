import React from 'react';
import './styles.css';
import ItemCount from './ItemCount';

const ItemDetail = ({item})=> {
    console.log(item)
    
    return (<div id="itemDetail">
        <h4>{item.title}</h4>
        <p>Descripción: {item.description}</p>
        <p>Precio: ${item.price}</p>
        <img src={item.pictureURL} alt="Imagen de producto" height="70px" width="70px"></img>
        <ItemCount stock={10} initial={1}/>
    </div>)
}

export default ItemDetail;