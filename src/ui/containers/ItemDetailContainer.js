import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { firestore } from '../../firebase9';
import { doc, getDoc } from 'firebase/firestore';
/* import '../styles.css'; */
import Main from '../layout/Main';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{
        setItem()

        //Obvie el if(id) que tenía antes envolviendo todo
        const itemRef = doc(firestore, "items", id)
        getDoc(itemRef)
        .then((docSnapshot)=>{
            //Check if the doc exists
            if (docSnapshot.exists()) {
                const res = {
                    id: id,
                    ...docSnapshot.data()
                }
                setItem(res)
            }
            else {
                console.log("Document does not exist")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }, [id])
    
    return (
        <Main>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </Main>
    )
}

export default ItemDetailContainer;