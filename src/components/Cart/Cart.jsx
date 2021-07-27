import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
    const { cart } = useContext(CartContext);
    let total = 0;

    return (
        <section className="basic-container m-t_32">
            <h1>Hola, soy el Cart.jsx</h1>

            {
                cart.length ?
                <>
                {
                    cart.map(({ item, cantidad }) => {
                        total += (item.price * cantidad);
                        return <CartItem key={item.id} item={item} cantidad={cantidad} />
                    })
                }
                <h4>Total: ${total}</h4>
                </>
                :
                <div>
                    <h3>No hay items en el carrito :(</h3>
                    <p>Probá reventando la tarjeta con alguno de nuestros productos.</p>
                    <Link to={'/'} alt='Buscar productos'>Ver catálogo</Link>
                </div>
            }

            
        </section>
    )
};