import React from 'react'
/* import '../styles.css' */
//Ya me llegan los estilos

const CheckoutForm = ({getUsuario, getName, getEmail, getPhone, clear}) => {

    return (
        <div className="checkout">
            <p>Por favor complete los datos</p>
            <form onSubmit={(e)=>getUsuario(e)}>
                <div className="formItem">
                    <label htmlFor="nombre">Nombre: </label>
                    <input onChange={(e)=>{getName(e.target.value)}} id="nombre" type="text" name="nombre" placeholder="José Perez" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="celular">Celular: </label>
                    <input onChange={(e)=>{getPhone(e.target.value)}} id="celular" type="tel" name="celular" placeholder="1133333333" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="email">Email: </label>
                    <input onChange={(e)=>{getEmail(e.target.value)}} id="email" type="email" name="email" placeholder="jperez@email.com" required></input>
                </div>
                <button type="submit" onClick={clear}>Terminar</button>
            </form>                    
        </div>
    )
}

export default CheckoutForm