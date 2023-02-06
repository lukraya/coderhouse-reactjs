import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getItemById } from '../../api/firestoreQueries';
import Main from '../layout/Main';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{
        setItem()
        
        //Obvie el if(id) que tenía antes envolviendo todo
        getItemById(id, setItem)        
    }, [id])
    
    return (
        <Main>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </Main>
    )
}

export default ItemDetailContainer;