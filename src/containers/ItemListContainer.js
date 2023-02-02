import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {firestore} from '../firebase9';
import { collection, getDocs, query, where } from 'firebase/firestore';
import '../styles.css';
import ItemList from '../views/ItemList';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setItems([])
        //const itemsCollection = firestore.collection("items")
        const itemsCollection = collection(firestore, "items")

        if(id){
            //const query = itemsCollection.where("categoria","==",id)
            const q = query(itemsCollection, where("categoria","==",id))

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
            })

            /* query.get()
            .then((resultado)=>{                
                resultado.docs.forEach((doc)=>{
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
        }else {
            //const query = itemsCollection.get()
            const q = query(itemsCollection)
            //query
            getDocs(q)
            .then((/* resultado */qSnapshot)=>{
                //Este forEach es exactamente el mismo de arriba: la callback podría estar def en otro lado?
                /* resultado.docs */qSnapshot.forEach((doc)=>{
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
            })
        }
    }, [id])

    
    return (
        <ItemList items={items}/>
    )
} 

export default ItemListContainer;