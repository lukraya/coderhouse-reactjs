import React from 'react';
import './styles.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({items})=> {
    const [producto,setProducto] = React.useState({});

    const buscarItem = items.find((elemento)=>{ return elemento.id === 1})
    console.log(buscarItem)

    React.useEffect(()=>{
        new Promise ((resolver,rechazar)=>{
            setTimeout(()=>{
                resolver(buscarItem)
            },2000)
        })
        .then((resultado)=>{
            setProducto(resultado)
        })
    },[buscarItem])

    return (<ItemDetail producto={producto}/>)
}

export default ItemDetailContainer;