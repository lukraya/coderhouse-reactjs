import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { firestore } from '../firebase';
import '../styles.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{
        setItem()
        const itemsCollection = firestore.collection("items")

        if(id){            
            const query = itemsCollection.get() //debería hacer un where acá?
            query
            .then((resultados)=>{
                const arrayDocs = resultados.docs                
                const resultado = (arrayDocs.find(doc=>doc.id===id))
                const res = {   id: id,                                
                                ...resultado.data()    }
                setItem(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [id])
    
    return (
        <div>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </div>
    )
}

export default ItemDetailContainer;