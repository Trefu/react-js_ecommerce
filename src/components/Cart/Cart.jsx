import React, { useEffect } from 'react';
import { CartItem } from '../CartItem/CartItem';

export const Cart = ({ cart, setTotal }) => {
    let total = 0;

    useEffect(() => {
        setTotal(total);
    });

    return (
        <div className="m-r_32 w_55p width-100p_in-980">
            {
                cart.map(({ item, cantidad }) => {
                    total += (item.price * cantidad);
                    return <CartItem key={item.id} item={item} cantidad={cantidad} />
                })
            }
        </div>
    )
};