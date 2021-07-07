import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ITEM_STOCK = 5;

export const ItemDetail = ({ item, description }) => {
    const [count, setCount] = useState(1);
    const onAdd = (n) => n <= ITEM_STOCK && n >= 0 ? setCount(n) : '';

    return (
        <div className="item-detail p_32 bdr-g-l_3 bg-g-l_1 b-r_5 d-f a-i_c row-to-column_in-980">
            <img src={item.pictures[0].url} alt="" />
            <div className="d-f f-d_c m-l_32">
                <h1 className="m_0 m-b_16">{item.title}</h1>
                <h3 className="m_0 ars-symbol">{item.price}</h3>
                <p>{description}</p>
                {count === ITEM_STOCK ? <Link className="btn-primary m-t_16" to={`/cart`}>Terminar compra</Link> : <ItemCount count={count} onAdd={onAdd} />}
            </div>
        </div>
    )
}