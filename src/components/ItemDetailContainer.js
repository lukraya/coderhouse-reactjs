import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    /* const buscarItem = items.find((elemento)=>{ return elemento.id === 1})
    console.log(buscarItem) */

    useEffect(()=>{
       /*  new Promise ((resolver,rechazar)=>{
            setTimeout(()=>{
                resolver(buscarItem)
            },2000)
        })
        .then((resultado)=>{
            setProducto(resultado)
        })
    },[buscarItem]) */
    let getProductos = fetch("../productos.json")

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            setTimeout(()=>{
                if(id){
                    setItem(resultado.filter(item=>item.id===id)[0])
                }
            },2000)
        })
    }, [id])

    return (<div>
        {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
    </div>)
}

export default ItemDetailContainer;