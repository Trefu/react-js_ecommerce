import { Link } from 'react-router-dom';
import './ItemCount.css';

/**
 * Hay algo que hace ruido.
 * - Cuando se agrega al carrito, en realidad se está modificando la cantidad de items
 * - No es que se agregan "X" más items, o se borran "X" items
 * - Supongo que cuando controles stock, después vas a poder actualizarlo y va quedar más en claro
 */

const TXT_BTN_AGREGAR = 'Añadir al carrito';
const TXT_BTN_ELIMINAR = 'Eliminar del carrito';

export const ItemCount = ({ initial, stock, count, updateCount, addToCart }) => {
    const BTN_ADD = document.querySelector('button.button-add');

    const onUpdateCountHandler = (n) => {
        BTN_ADD.style.display = "block";
        changeButtonText(n <= 0 ? TXT_BTN_ELIMINAR : TXT_BTN_AGREGAR);
        updateCount(n);
    }

    const changeButtonText = (text) => BTN_ADD.innerText = text;

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