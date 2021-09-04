import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';

export const ItemCount = ({ initial, stock, count, updateCount, addToCart }) => {
    const [showButton, setShowButton] = useState(false);

    const onUpdateCountHandler = (n) => {
        updateCount(n);
        setShowButton(true);
    }

    const addCartHandler = () => {
        setShowButton(false);
        addToCart();
    }

    return (
        <div className="item-count m-t_16">

            <div className="button-container">
                <button onClick={() => { onUpdateCountHandler(count - 1); }}>-</button>
                <p>{count > 0 ? count : initial} <span> de {stock}</span></p>
                <button onClick={() => { onUpdateCountHandler(count + 1); }}>+</button>
            </div>

            {
                showButton ?
                    <button className="button-add m-t_16" onClick={() => { addCartHandler() }}>Agregar al carrito</button>
                    :
                    ''
            }

            <Link className="m_0" to={'/cart'}>Ver carrito</Link>
        </div>
    )
}