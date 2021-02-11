import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';
import {firestore} from '../firebase'

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setItems([])
        const itemsCollection = firestore.collection("items")

        if(id){
            const query = itemsCollection.where("categoria","==",id)
            query.get()
            .then((resultado)=>{                
                resultado.docs.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    ...doc.data()    }
                    setItems(items => [...items, item])                    
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
                                    ...doc.data()    }
                    setItems(items => [...items, item])
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [id])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </>
    )
} 

export default ItemListContainer;