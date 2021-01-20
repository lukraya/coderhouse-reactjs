import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([/* producto1, producto2, etc */])
    
    //recibe info de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }

    //crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, quantity, callback)=> {
        const itemAgregado = {producto: objetoItem, cantidad: quantity}        
        callback(itemAgregado)
    }

    //chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (producto)=> {
        const existe = cart.find(element => element.producto.id === producto.producto.id)
        console.log(existe)
        if (!existe) {setCart(cart => [...cart, producto])}
            else{alert("El producto ya se encuentra en el carrito.")}
    }
    
    //remover un item del carrito usando su id
    const removeItem = (itemId)=> {
        const index = cart.indexOf(cart.find(element => element.producto.id === itemId))
        if (index) {cart.splice(index, 1)}
        //FALTA TESTEAR
    }

    //remover todos los items
    const clear = ()=> {
        setCart([])
    }

    

    return (
        <Provider value={{addItem, removeItem, clear, cart}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider};
export default CartProvider;
