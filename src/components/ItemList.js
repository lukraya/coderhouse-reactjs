import React from 'react';
import Item from './Item';

const ItemList = ()=> {
    setTimeout(() => {
        const itemsArray = [{id:1, title:"Alfajor Jorgito", description:"Alfajor de chocolate", price:2, pictureUrl:"https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/alfajor-jorgito-chocolate-venta.jpg"},
            {id:2, title:"Alfajor Milka Oreo", description:"Alfajor triple", price:5, pictureUrl:"https://http2.mlstatic.com/alfajor-milka-torta-oreo-61g-x-12u-gomarket-mayorista-D_NQ_NP_811865-MLA32318711592_092019-Q.jpg"},
            {id:3, title:"Alfajor Shot", description:"Alfajor triple", price:5, pictureUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2181250_f.jpg"}]
    }, 2000);

    const [items,setItems] = React.useState(itemsArray)    
    

    return (
        <ul>
            {items.map((elemento,indice)=>{
                return(
                    <Item/>
                )
            })}
        </ul>
    )
}

export default ItemList;