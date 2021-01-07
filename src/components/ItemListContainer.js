import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        let getProductos = fetch("../productos.json")

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            setTimeout(()=>{
                /* console.log(resultado) */
                if(id){
                    setItems(resultado.filter(item=>item.category===id))
                }else{
                    setItems(resultado)
                }
            },2000)
        })
        
       /*  new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                resolver([{id:1, title:"Jorgito", description:"Alfajor de chocolate", price:2, pictureUrl: jorgito},
                {id:2, title:"Milka Oreo", description:"Alfajor triple", price:5, pictureUrl: milka},
                {id:3, title:"Shot", description:"Alfajor triple", price:5, pictureUrl: shot}])
            },2000);
        })
        .then((resultado)=>{
            setItems(resultado)
        }) */
    }, [id])

    return (<>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
    </>
    )
} 

export default ItemListContainer;