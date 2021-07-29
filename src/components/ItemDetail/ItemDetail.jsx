import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ item, description }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const updateCount = (n) => n <= item.stock && n >= 0 ? setCount(n) : '';
    const addToCart = () => addItem(item, count);
    
    return (
        <div className="item-detail p_32 bdr-g-l_3 bg-g-l_1 b-r_5 d-f a-i_c row-to-column_in-980">
            <img src={item.img_url} alt="" />
            <div className="d-f f-d_c m-l_32">
                <h1 className="m_0 m-b_16">{item.name}</h1>
                <h3 className="m_0 ars-symbol">{item.price}</h3>
                <p>{description}</p>
                <ItemCount initial={0} stock={item.stock} count={count} updateCount={updateCount} addToCart={addToCart} />
            </div>
        </div>
    )
}