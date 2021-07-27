import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const { cart, getItemsQuantity } = useContext(CartContext);
    const history = useHistory();
    const [count, setCount] = useState(0);

    const mouseEnter = () => {
        // TODO: Mejorar esta lógica:
        let e = document.getElementById('widget-item-list');
        let isHidden = e.classList.contains('widget-hidden');

        if(isHidden && count) {
            e.classList.remove('widget-hidden');
        } else if (!isHidden) {
            e.classList.add('widget-hidden');
        }
    }

    useEffect(() => {
        setCount(getItemsQuantity());
    }, [getItemsQuantity]);

    return (
        <>
            <Link onMouseEnter={() => mouseEnter()} to={'/cart'} alt={`${count} productos en el carrito`}>🛒 Carrito <span>{count}</span></Link>
            <div id="widget-item-list" className="widget-item-list bdr-g-l_3 bg-g-l_1 b-r_5 widget-hidden">
                {
                cart.map(({ item, cantidad }) => {
                    return (
                        <div>
                            <span>{cantidad}</span>
                            <img className="bdr-g-l_3" src={item.thumbnail} alt={item.title} />
                            <h5 onClick={() => { history.push(`/item/${item.id}`) }}>{item.title}</h5>
                            <span className="ars-symbol">{item.price * cantidad}</span>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
};