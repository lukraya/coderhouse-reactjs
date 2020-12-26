import React from 'react';

const Item = ({item})=> {
    console.log(item);

    return <>
        <img src={item.pictureURL} alt="Imagen de producto" height="50px" width="50px"></img>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
    </>
}

export default Item;