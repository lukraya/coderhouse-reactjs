import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Item = ({item})=> {
    /* console.log(item.pictureURL); */
    /* console.log(item.id)
    console.log(item.data) */
    const {data} = item

    return <div>
        <img src={data.pictureURL} alt={data.title} height="70px" width="70px"></img>
        <p>{data.title} ${data.price}</p>
        <div>
            <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
        </div>
    </div>
}

export default Item;