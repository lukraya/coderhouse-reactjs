import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const [stock,setStock] = React.useState(10);
    const [initial,setInitial] = React.useState(1);

    const onAdd = () => {
        if (stock>1) {
            setInitial(initial+1);
            setStock(stock-1);
        }                
    }

    const onSubstract = () => {
        if (initial>1) {
            setInitial(initial-1);
            setStock(stock+1);
        }      
    }

    return (<>
        <h1>{greeting}</h1>
        <ItemList/>
        <ItemCount initial={initial} onAdd={onAdd} onSubstract={onSubstract}/>
    </>
    )
} 

export default ItemListContainer;