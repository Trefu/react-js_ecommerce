import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const updateCount = (n) => {
        if (n <= stock && n >= 0) {
            setCount(n);
        }
    }

    /**
     * Esto llama al contador que esta en el navbar del header y le remplaza su valor
     */
    const onAdd = () => {
        document.getElementById('nav-bar-count').textContent = count;
    }

    return (
        <div className="item-count">
            <h4>Nombre</h4>
            <div className="button-container">
                <button onClick={() => updateCount(count + 1)}>+</button>
                <p>{count}</p>
                <button onClick={() => updateCount(count - 1)}>-</button>
            </div>
            <button className="button-add" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}