import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { default as navBarItems } from '../../utils/NavBarItems.json';
import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <nav className='nav-bar m-l_a p-tb_22'>
                {navBarItems.map(({ url, name }, i) => <Link key={i} to={`${url}`} alt={name}>{name}</Link>)}
                <CartWidget />
            </nav>
        </>
    )
};