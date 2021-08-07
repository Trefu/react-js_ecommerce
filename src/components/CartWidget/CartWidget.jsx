import React, { useContext, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const ref = useRef(); // TODO: Hay un bug con el ref que cada tanto sale
    const { cart, handlerSidebarWidget, deleteItemFromCartById } = useContext(CartContext);
    const history = useHistory();
    let total = 0;

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (ref != null && !ref.current.contains(e.target) && handlerSidebarWidget.getDisplay() === 'block' && e.target.id !== 'cart-nav') {
                handlerSidebarWidget.hide();
            }
        }

        handlerSidebarWidget.hide();
        document.addEventListener("mousedown", checkIfClickedOutside);
    });

    return (
        <>
            <div id="sider-widget-item-list" className="widget-item-list bdr-g-l_3 bg-g-l_1 b-r_5" ref={ref}>
                <Link onClick={(e) => { e.preventDefault(); handlerSidebarWidget.hide() }}  to={'/cart'} className="a-small">Cerrar</Link>

                {cart.map(({ item, cantidad }) => {
                    total += item.price * cantidad;
                    return (
                        <div className="each-item" key={item.id}>
                            <div className="img-wrapper">
                                <img className="bdr-g-l_3" src={item.img_url} alt={item.name} />
                            </div>
                            <span>{cantidad}</span>
                            <p className="title" onClick={() => { history.push(`/item/${item.id}`) }}>{item.name}</p>
                            <p className="price ars-symbol">{item.price * cantidad}</p>
                            <button onClick={() => deleteItemFromCartById(item.id)} className="clean-button btn-grey">X</button>
                        </div>
                    )
                })}

                <hr />

                <p className="total"><b>Total:</b> ${total}</p>


                <Link onClick={() => handlerSidebarWidget.hide()} className="btn-primary" to={'/cart'}>Terminar compra</Link>

            </div>
        </>
    )
};