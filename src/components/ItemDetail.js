import React, {useState} from 'react';
import './styles.css';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({item})=> {
    /* console.log(item) */
    const [stock,setStock] = useState(10)
    const [initial,setInitial] = useState(1)
    const [cantItem, setCantItem] = useState()

    const onAdd = ()=>{
        if(stock>0) {
            setStock(stock-initial)
            setCantItem(initial)
            console.log(stock)
        }
    }
    const onSumar = () => {
        if (initial<stock) {
            setInitial(initial+1)
        }                
    }
    const onRestar = () => {
        if (initial>0) {
            setInitial(initial-1)
        }      
    }
    
    return (<div id="itemDetail">
        <h4>{item.title}</h4>
        <p>Descripción: {item.description}</p>
        <p>Precio: ${item.price}</p>
        <img src={item.pictureURL} alt="Imagen de producto" height="70px" width="70px"></img>
        {cantItem ? 
            <button><NavLink to="/cart">Terminar mi compra</NavLink></button>
            : <ItemCount onAdd={onAdd} onSumar={onSumar} onRestar={onRestar} initial={initial}/>
        }
    </div>)
}

export default ItemDetail;