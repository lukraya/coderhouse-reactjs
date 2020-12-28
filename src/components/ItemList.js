import React from 'react';
import Item from './Item';
import jorgito from './media/alfajor-jorgito-chocolate.jpg';
import milka from './media/alfajor-milka-oreo.jpg';
import shot from './media/alfajor-shot-triple.jpg';

const ItemList = ()=> {
    const [items,setItems] = React.useState([]);

    React.useEffect(()=>{
        new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                resolver([{id:1, title:"Jorgito", description:"Alfajor de chocolate", price:2, pictureUrl: jorgito},
                {id:2, title:"Milka Oreo", description:"Alfajor triple", price:5, pictureUrl: milka},
                {id:3, title:"Shot", description:"Alfajor triple", price:5, pictureUrl: shot}])
            },2000);
        })
        .then((resultado)=>{
            setItems(resultado)
        })
    }, []) 
    
    console.log(items[0])

    return (
        <div>
            {items.length === 0 ? <p>Cargando productos</p> : null}
            {/* <img src={jorgito} alt="prueba"></img> */}
            {items.map((item,indice)=>{
                console.log(item.pictureUrl);
                return <Item item={item} key={item.id}/>
            })}
        </div> //cambiar luego a una ul con li y sacar los estilos
    )
}

export default ItemList;