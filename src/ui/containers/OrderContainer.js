import React, {useState, useEffect} from 'react'
import { createOrder } from '../../api/firestoreQueries'
//import { firestore } from '../../api/firebase9'
//import { addDoc, collection } from 'firebase/firestore'
import Order from '../views/Order'

const OrderContainer = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        if (!ordenId) {
            //OLD
            /* const orders = collection(firestore, "orders")
            addDoc(orders, orden)
            .then((docRef)=>{
                setOrdenId(docRef.id)
            })
            .catch((err)=>{
                console.log(err)
            }) */

            //NEW IMPORTED
            createOrder(orden, setOrdenId)
        }
              
    },[ordenId, orden])


    return (
        <Order ordenId={ordenId}/>
    )
}

export default OrderContainer
