import React from 'react';
import './styles.css';

const ItemCount = ({initial,stock}) => {
    const [stockB,setStockB] = React.useState(stock);
    const [inicial,setInicial] = React.useState(initial);

    const onAdd = () => {
        if (stockB>1) {
            setInicial(inicial+1);
            setStockB(stockB-1);
        }                
    }

    const onSubstract = () => {
        if (inicial>1) {
            setInicial(inicial-1);
            setStockB(stockB+1);
        }      
    }
   
    return (
        <div id="itemCount">
            <p>Alfajor Shot triple</p>
            <div id="seleccionCant">
                <button onClick={onSubstract} className="controles">-</button>
                <p>{inicial}</p>
                <button onClick={onAdd} className="controles">+</button>
            </div>
            <button id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;