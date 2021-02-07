import React, { useState } from 'react'
import Checkout from './Checkout'
import Orden from './Orden'

const CheckoutContainer = () => {
    const [orden, setOrden] = useState()

    /* const ejemploOrden = {
                            buyer: {
                                nombre: nombre,
                                telefono: celular,
                                correo: email
                            },
                            items: [{id, title,price}],
                            total: total} 
    */

    return (
        <>
            { orden ?
            <Orden/>
            : <Checkout/>}
        </>
    )
}

export default CheckoutContainer
