import React, { useContext } from 'react'
import { contexto } from '../CartContext'
import '../styles.css'
import Main from '../layout/Main'
import CartItem from './CartItem'
import CartEmpty from './CartEmpty'
import CartOptions from './CartOptions'

const Cart = () => {
  const {cart, precioTotal, clear} = useContext(contexto)
  
    //(Cart: CartList? (map CartItem)
    return (
      <Main>
        <div className="cart">
          {cart.length > 0 ?
            <>
              {cart.map(item=>{return <CartItem key={item.producto.id} item={item}/>})}
              <CartOptions precioTotal={precioTotal} clear={clear} />
            </>
          : <CartEmpty/>}
        </div>
      </Main>
    )
}

export default Cart
