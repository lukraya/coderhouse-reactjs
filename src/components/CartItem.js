import React, {useContext} from 'react'
import { contexto } from '../CartContext'
import './styles.css'

const CartItem = ({item})=> {
    /* console.log(item) */
    const {cantidad, producto} = item
    const {removeItem} = useContext(contexto)
   
    return (<div className="productoCart">
        <h4>{producto.title} {/* {String.fromCharCode(40) + cantidad + String.fromCharCode(41)} */}</h4>
        <img src={producto.pictureURL} alt={producto.title} height="70px" width="70px"></img>
        <p>Precio: ${producto.price}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Subtotal: ${producto.price * cantidad}</p>
        <button onClick={()=>removeItem(producto.id)}>Quitar del carrito</button>
    </div>)
}

export default CartItem