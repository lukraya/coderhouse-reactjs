import React, {useState, useEffect} from 'react'
import { firestore } from '../firebase9'
import { addDoc, collection } from 'firebase/firestore'
import Order from '../views/Order'

const OrderContainer = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        if (!ordenId) {
            const orders = collection(firestore, "orders")
            addDoc(orders, orden)
            .then((docRef)=>{
                setOrdenId(docRef.id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        //Firebase 8 - OLD
        /* const orders = firestore.collection("orders")
        //Hace falta el if? - Sí, si no al cambiar ordenId volvería a correr el efecto. Tendría q tener todo en el IF
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        } */        
    },[ordenId, orden])


    return (
        <Order ordenId={ordenId}/>
    )
}

export default OrderContainer
