import React, { useState } from 'react'

const Checkout = () => {
    const [usuario, setUsuario] = useState({})

    const obtenerUsuario = (event,nombre,telefono,correo)=>{
        event.preventDefault()
        /* const nuevoUsuario = {  nombre: nombre,
                                telefono: telefono,
                                correo: correo
                            }
        setUsuario(nuevoUsuario) */
        console.log(event)
        
    }

    

    return (
        <div className="checkout">
            <p>Por favor complete los datos</p>
            <form onSubmit={(e)=>obtenerUsuario(e)}>
                <div className="formItem">
                    <label htmlFor="nombre">Nombre: </label>
                    <input id="nombre" type="text" name="nombre" placeholder="José Perez" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="celular">Celular: </label>
                    <input id="celular" type="tel" name="celular" placeholder="1133333333" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" name="email" placeholder="jperez@email.com" required></input>
                </div>
                <button type="submit">Terminar</button>
            </form>
        </div>
    )
}

export default Checkout
