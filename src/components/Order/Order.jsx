import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { firebaseService } from '../../service/FirebaseService';
import './Order.css';

export const Order = () => {
    const { id: orderId } = useParams();
    const { removeAllItems } = useContext(CartContext);
    const [order, setOrder] = useState([]);

    const consultarOrden = async () => {
        firebaseService.findAndSetAll(firebaseService.myCollections().ORDERS, setOrder);
    }

    const getItems = () => {
        if (order[0] === undefined) {
            return '';
        } else {
            let articles = order[0].items.map((i) => {
                let itemTotal = i.item.price * i.cantidad;
                return <>
                    <article className="order-item-article bdr-g-l_3 bg-g-l_1 b-r_5 d-f f-d_c a-i_c j-c_c" key={i.item.id}>
                        <h3>{i.item.name}</h3>
                        <img src={i.item.img_url} alt="" />
                        <p>Cantidad: <b>{i.cantidad}</b></p>
                        <p>Precio: <b>${itemTotal}</b></p>
                    </article>
                </>
            });

            return articles;
        }
    }

    useEffect(() => {
        removeAllItems();

        if (order.length === 0) {
            consultarOrden();
        }

    }, [orderId, order]);

    return (
        <>
            <section className="basic-container m-t_32">

                <h1 className="m_0">Gracias {order.length === 0 ? '' : order[0].buyer.name} por tu compra!</h1>
                <p className="m-t_12 m-b_0">Tu número de orden es <b className="t-t_u">{orderId}</b>.</p>

                <div className="articles-container">
                    {getItems()}
                </div>

                {order.length === 0 ? '' : <p>Total: <b>${order[0].total}</b></p>}
            </section>
        </>
    )
}