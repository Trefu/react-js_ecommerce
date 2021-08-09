import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { default as navBarItems } from '../../cfg/NavBar/NavBarItems.json';
import { CartContext } from '../../context/CartContext/CartContext';
import './NavBar.css';

export const NavBar = () => {
    const { getItemsQuantity } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const showSiderCartWidget = (e) => {
        e.preventDefault();
        let x = document.getElementById('sider-widget-item-list');
        x.style.display === "none" ?  x.style.display = "block" : x.style.display = "none";
    }

    useEffect(() => {
        setCount(getItemsQuantity());
    }, [getItemsQuantity]);

    return (
        <>
            <nav className='nav-bar m-l_a p-tb_22 width-100p_in-980 t-a_c_in-980'>
                {navBarItems.map(({ url, name }, i) => <Link key={i} to={`${url}`} alt={name}>{name}</Link>)}
                <Link id='cart-nav' onClick={showSiderCartWidget} to={'/'} alt={`${count} productos en el carrito`}>🛒 Carrito <span>{count}</span></Link>
            </nav>
        </>
    )
};