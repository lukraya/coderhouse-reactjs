import React, {useState, useEffect} from 'react'
import { firestore } from '../firebase9'
import Order from '../views/Order'

const OrderContainer = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        const orders = firestore.collection("orders")
        //Hace falta el if?
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }        
    },[ordenId, orden])


    return (
        <Order ordenId={ordenId}/>
    )
}

export default OrderContainer
