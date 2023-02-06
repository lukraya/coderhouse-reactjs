import React, {useState, useEffect} from 'react'
import { createOrder } from '../../api/firestoreQueries'
import Order from '../views/Order'

const OrderContainer = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        if (!ordenId) {            
            createOrder(orden, setOrdenId)
        }
              
    },[ordenId, orden])


    return (
        <Order ordenId={ordenId}/>
    )
}

export default OrderContainer
