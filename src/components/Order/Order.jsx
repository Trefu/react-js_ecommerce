import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firebaseService } from '../../service/FirebaseService';
import './Order.css';

export const Order = () => {
    const { id: orderId } = useParams();
    const [order, setOrder] = useState([]);

    const getItems = () => {
        if (order.items === undefined) {
            return '';
        } else {
            let articles = order.items.map((i) => {
                let itemTotal = i.item.price * i.cantidad;

                return <article className="order-item-article bdr-g-l_3 bg-g-l_1 b-r_5 d-f f-d_c a-i_c j-c_c" key={i.item.id}>
                            <h3>{i.item.name}</h3>
                            <img src={i.item.img_url} alt="" />
                            <p>Cantidad: <b>{i.cantidad}</b></p>
                            <p>Precio: <b>${itemTotal}</b></p>
                        </article>
            });

            return articles;
        }
    }

    useEffect(() => {
        const consultarOrden = async () => {
            let o = await firebaseService.findById(firebaseService.myCollections().ORDERS, orderId);
            setOrder(o);
        }

        if (order.length === 0) {
            consultarOrden();
        }
    }, [orderId, order]);

    return (
        <>
            <section className="basic-container m-t_32">

                <h1 className="m_0">Gracias {order.length === 0 ? '' : order.buyer.name} por tu compra!</h1>
                <p className="m-t_12 m-b_0">Tu número de orden es <b className="t-t_u">{orderId}</b>.</p>

                <div className="articles-container">
                    {getItems()}
                </div>

                {order.length === 0 ? '' : <p>Total: <b>${order.total}</b></p>}
            </section>
        </>
    )
}