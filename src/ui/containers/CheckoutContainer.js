import React, {useContext, useState} from 'react'
import { contexto } from '../../CartContext'
import Main from '../layout/Main'
import CheckoutForm from '../views/CheckoutForm'
import OrderContainer from './OrderContainer'

const CheckoutContainer = () => {
    const [orden, setOrden] = useState()
    const {cart, precioTotal, clear} = useContext(contexto)

    //Obtener y crear el objeto usuario
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const getName = (name) => {
        setName(name)
    }

    const getPhone = (phone) => {
        setPhone(phone)
    }

    const getEmail = (email) => {
        setEmail(email)
    }

    const crearOrden = (usuario, callback)=>{
        const newOrden = {  buyer: usuario,
                            items: cart,
                            total: precioTotal(),
                            date: new Date().toLocaleString()   }
        callback(newOrden)
        //Moví clear del onClick en el botón submit, xq se ejecutaba antes de copiar el cart a la orden
        clear()
    }

    const getUsuario = (e)=>{
        e.preventDefault()
        const nuevoUsuario = {  nombre: name,
                                telefono: phone,
                                correo: email   }
        crearOrden(nuevoUsuario, setOrden)
    }
    
    
    return (
        <Main>
            {!orden ?
                <CheckoutForm getUsuario={getUsuario} getName={getName} getEmail={getEmail} getPhone={getPhone}/>
                : <OrderContainer orden={orden}/>        
            }
        </Main>
    )
}

export default CheckoutContainer
