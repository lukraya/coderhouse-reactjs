import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const stock = 10;

    const [initial,setInitial] = React.useState(1);
    
    const aumentarInitial = () => {
        if (initial<stock) {
            setInitial(initial+1)
        }        
    }
    const disminuirInitial = () => {
        if (initial>=1) {
            setInitial(initial-1)
        }
    }


    return (<>
        <h1>{greeting}</h1>
        <ItemCount initial={initial} aumentarInitial={aumentarInitial} disminuirInitial={disminuirInitial}/>
    </>
    )
} 

export default ItemListContainer;