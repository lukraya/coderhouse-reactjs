import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const {cart, clear} = useContext(contexto)
  /* console.log(cart) */  

    return (
        <div className="cart">
          {cart.length > 0 ?
          <>
          {cart.map(item=>{return <CartItem key={item.producto.id} item={item}/>})}
          <p>Total: $</p>
          <button onClick={clear}>Vaciar el carrito</button>
          </>
          : <>
              <p>No hay productos en el carrito aún.</p>
              <button><NavLink to="/">Ir a la tienda</NavLink></button>
            </>}
        </div>
    )
}

export default Cart
