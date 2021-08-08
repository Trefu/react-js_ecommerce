import { Link } from 'react-router-dom';
import './ItemCount.css';

const TXT_BTN_AGREGAR = 'Añadir al carrito';
const TXT_BTN_ELIMINAR = 'Eliminar del carrito';

export const ItemCount = ({ initial, stock, count, updateCount, addToCart }) => {

    const onUpdateCountHandler = (n) => {
        document.querySelector('button.button-add').style.display = "block";
        changeButtonText(n <= 0 ? TXT_BTN_ELIMINAR : TXT_BTN_AGREGAR);
        updateCount(n);
    }

    const changeButtonText = (text) => document.querySelector('button.button-add').innerText = text;

    return (
        <div className="item-count">

            <div className="button-container">
                <button onClick={() => { onUpdateCountHandler(count - 1); }}>-</button>
                <p>{count > 0 ? count : initial} <span> de {stock}</span></p>
                <button onClick={() => { onUpdateCountHandler(count + 1); }}>+</button>
            </div>

            <button style={{ display: "none" }} className="button-add m-t_16" onClick={addToCart}>{initial === 0 ? TXT_BTN_ELIMINAR : TXT_BTN_AGREGAR}</button>
            <Link className="m_0" to={'/cart'}>Ver carrito</Link>
        </div>
    )
}