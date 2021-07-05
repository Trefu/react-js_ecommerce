import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <nav className='nav-bar m-l_a p-tb_22'>
                <Link to='/'>Inicio</Link>
                {/* <Link to='/category/'>Categorías</Link> */}
                <Link to='/category/Juegos%20XBOX%20fisicos'>Xbox</Link>
                <Link to='/category/Juegos%20PS4'>PS4</Link>
                <Link to='/category/Juegos%20Steam'>Steam</Link>
                {/*<Link to='/contacto'>Contacto</Link>*/}
                <CartWidget />
            </nav>
        </>
    )
};