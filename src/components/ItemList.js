import React from 'react';
import Item from './Item';

const ItemList = ()=> {
    const [items,setItems] = React.useState([]);

    React.useEffect(()=>{
        new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                resolver([{id:1, title:"Jorgito", description:"Alfajor de chocolate", price:2, pictureUrl:"https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/alfajor-jorgito-chocolate-venta.jpg"},
                {id:2, title:"Milka Oreo", description:"Alfajor triple", price:5, pictureUrl:"https://http2.mlstatic.com/alfajor-milka-torta-oreo-61g-x-12u-gomarket-mayorista-D_NQ_NP_811865-MLA32318711592_092019-Q.jpg"},
                {id:3, title:"Shot", description:"Alfajor triple", price:5, pictureUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2181250_f.jpg"}])
            },2000);
        })
        .then((resultado)=>{
            setItems(resultado)
        })
    }, [])    

    return (
        <div>
            {items.length === 0 ? <p>Cargando productos</p> : null}
            {items.map((item,indice)=>{
                return <Item item={item}/>
            })}
        </div> //cambiar luego a una ul con li y sacar los estilos
    )
}

export default ItemList;