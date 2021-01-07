import React from 'react';
import './styles.css';
import Item from './Item';
/* import jorgito from './media/alfajor-jorgito-chocolate.jpg';
import milka from './media/alfajor-milka-oreo.jpg';
import shot from './media/alfajor-shot-triple.jpg'; */

const ItemList = ({items})=> {
    
    return (<>
            <div id="itemList">
                {items.length > 0 ? items.map(item=>{
                    return <Item key={item.id} item={item}/>
                })
                : <p>Cargando productos</p>}
            </div>
        </>
    )
}

export default ItemList;