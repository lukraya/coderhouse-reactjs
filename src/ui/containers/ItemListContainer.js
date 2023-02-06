import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../views/ItemList';
import { getItemsByCategory, getAllItems } from '../../api/firestoreQueries';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setItems([])

        if(id){
            getItemsByCategory(id, setItems)
        } else {
            getAllItems(setItems)
        }
    }, [id])
    
    return (
        <ItemList items={items}/>
    )
} 

export default ItemListContainer;