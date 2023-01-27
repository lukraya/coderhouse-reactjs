import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { contexto } from '../CartContext';
import '../styles.css';
import ItemCount from '../views/ItemCount';

const ItemDetail = ({item})=> {
    const [stock,setStock] = useState(10)
    const [initial,setInitial] = useState(1)
    const [cantItem, setCantItem] = useState()

    const {addItem} = useContext(contexto)

    const handleStock = ()=> {
        if(stock>0) {
            setStock(stock-initial)
            setCantItem(initial)         
        }
    }
    const onAdd = ()=>{
        //Efectuar cambios en el stock
        handleStock()
        //Mandar la info del item y su cant al contexto
        addItem(item, initial)        
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

    return (
        <div id="itemDetail">
            <h4>{item.title}</h4>
            <p>Descripción: {item.description}</p>
            <p>Precio: ${item.price}</p>
            <img src={item.pictureURL} alt="Imagen de producto" height="70px" width="70px"></img>
            {cantItem ? 
                <>
                    <button><NavLink to="/cart">Terminar mi compra</NavLink></button>
                    <button><NavLink to="/">Seguir comprando</NavLink></button>
                </>
                : <ItemCount onAdd={onAdd} onSumar={onSumar} onRestar={onRestar} initial={initial}/>
            }
        </div>
    )
}

export default ItemDetail;