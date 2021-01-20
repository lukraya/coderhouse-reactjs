import React, { useContext } from 'react'
import { contexto } from '../CartContext'
import Item from './Item'

const Cart = () => {
  const {cart} = useContext(contexto)
  /* console.log(producto) */
  console.log(cart)

    return (
        <>
          {cart.length > 0 ? 
          cart.map(item=>{return <p key={item.producto.id}>Producto: {item.producto.title} Cantidad: {item.cantidad}</p>})
          : <p>Este es el carrito</p>}
        </>
    )
}

export default Cart
