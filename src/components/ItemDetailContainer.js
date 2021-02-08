import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemDetail from './ItemDetail';
import { firestore } from '../firebase';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{
        setItem()
        const itemsCollection = firestore.collection("items")

        if(id){
            const itemId = id //creo q es innecesario
            /* console.log(itemId) */
            const query = itemsCollection.get()
            query
            .then((resultados)=>{
                /* console.log(resultados.docs) */
                const arrayDocs = resultados.docs
                const resultado = (arrayDocs.filter(doc=>doc.id===id)[0]).data() //probar find()
                /* console.log(resultado) */
                const res = {   id: itemId,
                                categoria: resultado.categoria,
                                title: resultado.title,
                                price: resultado.price,
                                description: resultado.description,
                                pictureURL: resultado.pictureURL    }
                setItem(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    }, [id])
    

    return (<div>
        {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
    </div>)
}

export default ItemDetailContainer;