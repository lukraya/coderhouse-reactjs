import React, {useState, useEffect} from 'react'
import { firestore } from '../firebase'

const Orden = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        const orders = firestore.collection("orders")
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
                console.log(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    },[ordenId, orden])

    console.log("Render Orden")

    return (<>{ordenId ?
                <>
                    <p>Orden de compra número: {ordenId}</p>
                    {/* <p>Detalles:</p> */}
                    <p>Gracias por su compra!</p>
                </>
                :
                <><p>Generando su orden</p></>
    }</>)
}

export default Orden
