import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Item = ({item})=> {
    /* console.log(item.pictureURL); */

    return <div>
        <img src={item.pictureURL} alt={item.title} height="50px" width="50px"></img>
        <p>{item.title} ${item.price}</p>
        <div>
            <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
        </div>
    </div>
}

export default Item;