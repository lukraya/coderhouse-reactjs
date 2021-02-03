import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';
import {firestore} from '../firebase'

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(()=>{
        let getProductos = fetch("../productos.json")

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            setTimeout(()=>{
                if(id){
                    setItems(resultado.filter(item=>item.categoria===id))
                }else{
                    setItems(resultado)
                }
            },2000)
        })       
    }, [id]) */

    useEffect(()=>{
        const itemsCollection = firestore.collection("items")

        if(id){
            const query = itemsCollection.where("categoria","==",id)
            query.get()
            .then((resultado)=>{
                /* console.log(resultado.docs) */
                resultado.docs.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    data: doc.data()    }
                    setItems(items => [...items, item])
                    /* console.log(items) */
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }else {
            const query = itemsCollection.get()
            query
            .then((resultado)=>{
                resultado.docs.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    data: doc.data()    }
                    setItems(items => [...items, item])
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [id])

    return (<>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
    </>
    )
} 

export default ItemListContainer;