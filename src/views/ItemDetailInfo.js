import React from 'react'

const ItemDetailInfo = ({item}) => {
    const {title, description, price, pictureURL} = item

    return (
        <>
            <h4>{title}</h4>
            <p>Descripción: {description}</p>
            <p>Precio: ${price}</p>
            <img src={pictureURL} alt="Imagen de producto" height="70px" width="70px"></img>
        </>
    )
}

export default ItemDetailInfo