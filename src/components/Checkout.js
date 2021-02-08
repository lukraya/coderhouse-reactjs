import React, {useContext, useState} from 'react'
import { contexto } from '../CartContext'
import Orden from './Orden'

const Checkout = () => {
    const [orden, setOrden] = useState()
    const {cart, precioTotal} = useContext(contexto)

    //Obtener y crear el objeto usuario
    /* const [usuario, setUsuario] = useState() */
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const getUsuario = (e)=>{
        e.preventDefault()
        const nuevoUsuario = {  nombre: name,
                                telefono: phone,
                                correo: email   }
        /* setUsuario(nuevoUsuario) */
        crearOrden(nuevoUsuario, setOrden)
    }
    const crearOrden = (usuario, callback)=>{
        const newOrden = {  buyer: usuario,
                            items: cart,
                            total: precioTotal()    }
        callback(newOrden)
    }
    //Será que al hacer setOrden, rerenderiza y los estados de name, phone y email quedan vacíos, 
    //de ahí que en Orden.js diga que buyer is undefined?

    /* console.log(usuario) */
    console.log("Render Checkout")
       

    return (
        <>{!orden ?
            (<div className="checkout">
                <p>Por favor complete los datos</p>
                <form onSubmit={(e)=>getUsuario(e)}>
                    <div className="formItem">
                        <label htmlFor="nombre">Nombre: </label>
                        <input onChange={(e)=>{setName(e.target.value)}} id="nombre" type="text" name="nombre" placeholder="José Perez" required></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="celular">Celular: </label>
                        <input onChange={(e)=>{setPhone(e.target.value)}} id="celular" type="tel" name="celular" placeholder="1133333333" required></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="email">Email: </label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" name="email" placeholder="jperez@email.com" required></input>
                    </div>
                    <button type="submit">Terminar</button>
                </form>
                
            </div>)
            : <Orden orden={orden}/>        
        }</>
    )
}

export default Checkout
