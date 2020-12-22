import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    
    return (<>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={10}/>
    </>
    )
} 

export default ItemListContainer;