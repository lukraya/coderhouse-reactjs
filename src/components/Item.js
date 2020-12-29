import React from 'react';
import './styles.css';

const Item = ({item})=> {
    /* console.log(item.pictureURL); */

    return <div>
        <img src={item.pictureURL} alt="Imagen de producto" height="50px" width="50px"></img>
        <p>{item.title} ${item.price}</p>
        {/* <p>{item.description}</p> */}
        {/* <p>${item.price}</p> */}
    </div>
}

export default Item;