import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([/* producto1, producto2, etc */])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //recibe info de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }

    //crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, quantity, callback)=> {
        const subtotal = quantity * objetoItem.price
        const itemAgregado = {producto: objetoItem, cantidad: quantity, subtotal: subtotal}
        /* console.log(itemAgregado) */        
        callback(itemAgregado, quantity)
    }

    //chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (producto, quantity)=> {
        const existe = cart.find(element => element.producto.id === producto.producto.id)
        /* console.log(existe) */
        if (!existe) {
            setCart(cart => [...cart, producto])
            setCantidadTotal(cantidadTotal + quantity)
            console.log(cantidadTotal)
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }
    
    //remover un item del carrito usando su id
    const removeItem = (itemId, quantity)=> {
        quitarItem(itemId, quantity, borrarItem)
    }

    const quitarItem = (itemId, quantity, callback)=> {
        /* console.log(itemId) */
        const index = cart.indexOf(cart.find(element => element.producto.id === itemId))
        /* console.log(index) */
        callback(index, quantity)
    }

    const borrarItem = (index, quantity)=> {
        cart.splice(index, 1)
        //acá veo que al hacer click en "Quitar item" se elimina el objeto del array, pero no re-renderiza Cart.js
        console.log(cart)
        setCart(cart)
        /* const newCart = cart
        newCart.splice(index, 1)
        console.log(newCart)
        setCart(newCart) */
        setCantidadTotal(cantidadTotal - quantity)
    }
    //Probé: a)crear en Cart.js un estado con el array cart consumiendo con useContext
    //b)crear un CartContainer.js para que consuma el contexto y pase cart por props a Cart.js
    //c)mutar una copia del array y guardar ese array mutado como cart con setCart
    //(probé también limpiar el caché)
    //UPDATE: ANDA. Lo único que hice fue agregar el estado de cantTotal y agregar quantity como parametro, algo totalmente paralelo

    //remover todos los items
    const clear = ()=> {
        setCart([])
    }

    //suma todos los subtotales --- Mismo problema que con Quitar item: no re-renderiza el componente
    const precioTotal = ()=>{
        return cart.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }

    //suma la cantidad total de productos en el carrito --- NO FUNCIONA
    /* const cantidadTotal = ()=>{
        return cart.reduce((suma, cantidad)=>suma + cantidad, 0)
    } */

    console.log(cart)

    return (
        <Provider value={{cart, addItem, removeItem, clear, precioTotal, cantidadTotal}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider};
export default CartProvider;
