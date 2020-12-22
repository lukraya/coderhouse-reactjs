import React from 'react';
import './ItemCount.css';

const ItemCount = ({initial,stock}) => {
    const [contador,setContador] = React.useState(initial);
    const [stockB,setStockB] = React.useState(stock);
    
    const sumarContador = () => {
        if (contador<stockB) {
            setContador(contador+1)
        }
    }

    const restarContador = () => {
        if (contador>0) {
            setContador(contador-1)
        }
    }
    
    const resetContador = () => {
        setContador(0)
    }

    const onAdd = () => {
        if (stockB>0) {
            setStockB(stockB-contador)
        };
              
    }
       
    return (
        <div id="itemCount">
            <p>Alfajor Shot triple</p>
            <div id="seleccionCant">
                <button onClick={restarContador} className="controles">-</button>
                <p>{contador}</p>
                <button onClick={sumarContador} className="controles">+</button>
            </div>
            <p>Stock: {stockB}</p>
            <button onClick={()=>{onAdd();resetContador()}} id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;