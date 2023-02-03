import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
//import {firestore} from '../../api/firebase9';
//import { collection, getDocs, query, where } from 'firebase/firestore';
/* import '../styles.css'; */
import ItemList from '../views/ItemList';
import { getItemsByCategory, getAllItems } from '../../api/firestoreQueries';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setItems([])
        //const itemsCollection = collection(firestore, "items")

        if(id){
            //OLD
            /* const q = query(itemsCollection, where("categoria","==",id))
            //La documentacion de v9 usa await, pero por el momento no puedo usarlo aca en el efecto
            //Podría hacer todo el pedido en otra funcion q devuelva el rtado y llamarla acá y setear items con ese rtado?
            getDocs(q)
            .then((qSnapshot)=>{
                qSnapshot.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    ...doc.data()    }
                    setItems(items => [...items, item])                    
                })
            })
            .catch((err)=>{
                console.log(err)

                //Si falla Firestore, uso mi json de backup
                let getProductos = fetch("../productos.json") //Esta ruta me lleva a public...

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
                })
            }) */
            //NEW IMPORTED
            getItemsByCategory(id, setItems)

        } else {
            //OLD
            /* const q = query(itemsCollection)
            
            getDocs(q)
            .then((qSnapshot)=>{
                //Este forEach es exactamente el mismo de arriba: la callback podría estar def en otro lado?
                qSnapshot.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    ...doc.data()    }
                    setItems(items => [...items, item])                    
                })
            })
            .catch((err)=>{
                console.log(err)

                //Si falla Firestore, uso mi json de backup
                let getProductos = fetch("../productos.json") //Esta ruta me lleva a public...

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
                })
            }) */
            //setItems tests
            /* 
                Si hago:
                    setItems([...items, item])
                me tira warning:
                    "React Hook useEffect has a missing dependency: 'items'. Either include it or remove the
                    dependency array. You can also do a functional update 'setItems(i => ...)' 
                    if you only need 'items' in the 'setItems' call"
                Usando setItems(i => [...i, item]) (con la func en el mismo componente) funciona, ergo 
                no necesito pasar items (estado) como parametro si hago una funcion externa?
            */
            //NEW LOCAL
            /* async function getAll () {
                try {
                    const q = query(itemsCollection)
                    const prods = await getDocs(q)
                    prods.forEach((doc)=>{
                        const item = {  id: doc.id,
                                        ...doc.data()    }
                        setItems(i => [...i, item])
                        //setItems((items)=>{[...items, item]})
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            getAll() */
            //NEW IMPORTED
            getAllItems(setItems)
        }
    }, [id])

    
    return (
        <ItemList items={items}/>
    )
} 

export default ItemListContainer;