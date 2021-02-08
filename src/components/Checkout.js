import React, {useState} from 'react'

const Checkout = () => {
    const [orden, setOrden] = useState()
    const [usuario, setUsuario] = useState({})
    
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const getUsuario = (e)=>{
        e.preventDefault()
        const nuevoUsuario = {  nombre: name,
                                telefono: phone,
                                correo: email   }
        setUsuario(nuevoUsuario)
    }
    console.log(usuario)

    return (
        <div className="checkout">
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
        </div>
    )
}

export default Checkout
