import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import {firestore} from './firebase9'

//Callback repetida en foreach de getAll y getByCat
const callbackItems = (doc, cb)=>{
    const item = {  id: doc.id,
                    ...doc.data()    }
    cb(i => [...i, item])
}

const getProductos = fetch("../productos.json").then((resultado)=>{
    return resultado.json()
})

//Queries a ITEMS
const itemsCollection = collection(firestore, "items")

//Traer todos los items
export const getAllItems = async (callback)=>{
    try {
        const q = query(itemsCollection)
        const prods = await getDocs(q)
        prods.forEach((doc)=>{
            callbackItems(doc, callback)
        })
    } catch (error) {
        console.log(error)
        //"FirebaseError: Missing or insufficient permissions." SÍ pasa (reglas de firestore)
        //"Sin conexión/internet" no pasa por acá; msj de error desde index.js
        //Nombre de colección erróneo tampoco

        //Uso mi json de backup
        getProductos        
        .then((res)=>{
            setTimeout(()=>{
                callback(res)
            }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Traer items por categoría
export const getItemsByCategory = async (id, callback)=>{
    try {
        const q = query(itemsCollection, where("categoria","==",id))
        const prodsCat = await getDocs(q)
        prodsCat.forEach((doc)=>{
            callbackItems(doc, callback)
        })
    } catch (error) {
        console.log(error)

        //Uso mi json de backup
        getProductos
        .then((res)=>{
            setTimeout(()=>{
                callback(res.filter(item=>item.categoria===id))
            }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Traer un item por ID
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

        //Uso mi json de backup
        getProductos
        .then((res)=>{
            setTimeout(()=>{
                //== porque el id por param es un string
                callback(res.find(item=>item.id==id))
            }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//Queries a ORDERS
const orders = collection(firestore, "orders")
//Agregar nueva orden
export const createOrder = async (order, callback)=>{
    try {
        const docRef = await addDoc(orders, order)
        callback(docRef.id)
    } catch (error) {
        console.log(error)

        callback('error')
    }
}