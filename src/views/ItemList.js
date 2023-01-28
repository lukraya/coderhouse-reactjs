import React from 'react';
import '../styles.css';
import Main from '../layout/Main';
import Item from './Item';

const ItemList = ({items})=> {
    //Se re-renderiza cuando le llega items xq cambia prop, pero tmb xq se re-renderiza el padre al tener items, su estado, no?    
    
    return (
        <Main>
            <h1>Bienvenidos a la tienda</h1>
            <div id="itemList">
                {items.length > 0 
                ? items.map(item=>{return <Item key={item.id} item={item}/>})
                : <p>Cargando productos</p>}
            </div>
        </Main>
    )
}

export default ItemList;