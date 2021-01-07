import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{       
        let getProductos = fetch("../productos.json")

        getProductos
        .then((resultados)=>{
            return resultados.json()
        })
        .then((resultados)=>{
            setTimeout(()=>{
                if(id){
                    console.log(resultados)
                    console.log(id)
                    /* setItem(resultados.filter(resultado=>resultado.id===id)[0]) */
                    /* setItem(resultados) */
                    let resultado = resultados.filter(resultado=>resultado.id==id)[0]
                    console.log(resultado)
                    setItem(resultado)
                }
            },2000)
        })
    }, [id])
    console.log(item)

    return (<div>
        {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
    </div>)
}

export default ItemDetailContainer;