import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        /* console.log("Esto es un efecto") */
        let getProductos = fetch("../productos.json")

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            setTimeout(()=>{
                /* console.log(resultado) */
                if(id){
                    setItems(resultado.filter(item=>item.categoria===id))
                }else{
                    setItems(resultado)
                }
            },2000)
        })       
    }, [id])

    return (<>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
    </>
    )
} 

export default ItemListContainer;