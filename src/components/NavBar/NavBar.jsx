import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
        <nav className='nav-bar m-l_a p-tb_22'>
            <a href='/'>Inicio</a>
            <a href='/'>Categorías</a>
            <a href='/'>Ofertas</a>
            <a href='/'>Ayuda</a>
            <CartWidget/>
        </nav>
        </>
    )
};

export default NavBar;