import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ item, description }) => {
    const { addItem, obtenerCantidadDeUnItemById } = useContext(CartContext);
    const [count, setCount] = useState(obtenerCantidadDeUnItemById(item.id));
    const updateCount = (n) => n <= item.stock && n > 0 ? setCount(n) : '';
    const addToCart = () => addItem(item, count);

    return (
        <div className="item-detail p_32 bdr-g-l_3 bg-g-l_1 b-r_5 d-f a-i_c row-to-column_in-980 m-b_32">

            <div className="d-f f-d_c j-c_c t-a_c p-x_32 ">
                <img className="b-r_5p w-100p" src={item.img_url} alt={item.name} />
                <Link className="a-small m-l_a m-r_a m-t_12" to={`/add/${item.id}`}>Editar producto</Link>
            </div>

            <div className="d-f f-d_c ">
                <h1 className="m_0 m-b_16">{item.name}</h1>
                <h3 className="m_0 ars-symbol">{item.price}</h3>
                <ItemCount initial={count} stock={item.stock} count={count} updateCount={updateCount} addToCart={addToCart} />
            </div>

        </div>
    )
}