import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import {firestore} from './firebase9'

//BACKUP JSON - FOREACH
//Queries a ITEMS
const itemsCollection = collection(firestore, "items")

//Get all items
export const getAllItems = async (callback)=>{
    try {
        const q = query(itemsCollection)
        const prods = await getDocs(q)
        prods.forEach((doc)=>{
            const item = {  id: doc.id,
                            ...doc.data()    }
            callback(i => [...i, item])
        })
    } catch (error) {
        console.log(error)

        //Si falla Firestore, uso mi json de backup
        /* let getProductos = fetch("../productos.json") //Esta ruta me lleva a public...

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((res)=>{
            setTimeout(()=>{
                setItems(res)
            }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        }) */
    }
}

//Get items by category
export const getItemsByCategory = async (id, callback)=>{
    try {
        const q = query(itemsCollection, where("categoria","==",id))
        const prodsCat = await getDocs(q)
        //Este forEach es exactamente el mismo de arriba: la callback podría estar def en otro lado?
        prodsCat.forEach((doc)=>{
            const item = {  id: doc.id,
                            ...doc.data()    }
            callback(i => [...i, item])
        })
    } catch (error) {
        console.log(error)

        //Si falla Firestore, uso mi json de backup
        /* let getProductos = fetch("../productos.json") //Esta ruta me lleva a public...

        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((res)=>{
            setTimeout(()=>{
                setItems(res.filter(item=>item.categoria===id))
            }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        }) */
    }
}

//Get item by id
export const getItemById = async (id, callback)=>{
    try {
        const q = doc(firestore, "items", id)
        const prod = await getDoc(q)
        if (prod.exists()) {
            const res = {
                id: id,
                ...prod.data()
            }
            callback(res)
        }
        else {
            console.log("Document does not exist")
        }        
    } catch (error) {
        console.log(error)
    }
}


//Queries a ORDERS
const orders = collection(firestore, "orders")
//Add new order
export const createOrder = async (order, callback)=>{
    try {
        const docRef = await addDoc(orders, order)
        callback(docRef.id)
    } catch (error) {
        console.log(error)    
    }
}