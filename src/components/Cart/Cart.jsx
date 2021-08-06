import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { utilGetValueByName, utilRemoveElements } from '../../utils/FunctionsUtils';
import { firebaseService } from '../../service/FirebaseService';
import { useHistory } from "react-router-dom";

/**
 * TODO:
 * Mover toda la lógica a un container
 * Mover la lógica de forms validations a algo generico
 * Mover la lógica de firestore
 */
export const Cart = () => {
    const { cart, removeAllItems } = useContext(CartContext);
    const history = useHistory();
    let total = 0;

    const confirmarCompra = async () => {
        document.querySelector('div.error-c').style.display = "none";

        if (validateForm()) {
            let data = {
                buyer: {
                    name: utilGetValueByName('name'),
                    phone: utilGetValueByName('phone'),
                    email: utilGetValueByName('email')
                },
                items: cart,
                date: firebaseService.parseDate(new Date()),
                total: total
            }

            // TODO: Clavar un set loading

            // Actualizo el stock
            await firebaseService.updateItemsStock(data.items);
            // Genero la orden
            let orderId = await firebaseService.addItem(firebaseService.myCollections().ORDERS, data);
        
            // Limpio el Cart
            removeAllItems();
            history.push(`/order/${orderId}`);
        }
    }

    // Todo: Esto de validar form y eso,
    // Debería ser algo más generico y no debería estar acá, además faltan completar las validaciones
    const validateForm = () => {
        let required = ['name', 'phone', 'email'];

        utilRemoveElements('span.error-leyenda');

        let itsOk = true;
        for (let e of required) {
            if (!utilGetValueByName(e)) {
                showFormError('Debes completar el formulario', 'buyer-form');
                highLightInputError('Campo vacío', 'buyer-form', e);
                itsOk = false;
            }
        }

        return itsOk;
    }

    const highLightInputError = (message, formId, name) => {
        let e = document.querySelector(`form#${formId}.any-f div.i-c input[name=${name}]`);
        let span = document.createElement('span');
        span.classList.add("error-leyenda");
        span.innerText = message;
        e.parentNode.insertBefore(span, e.nextSibling);
    }

    const showFormError = (message, formId) => {
        document.querySelector(`#${formId} div.error-c p`).innerText = message;
        document.querySelector(`#${formId} div.error-c`).style.display = "block";
    }

    return (
        <section className="basic-container m-t_32">
            {
                cart.length ?
                    <>
                        <h1 className="m_0">Checkout</h1>
                        <p className="m-t_12 m-b_0">Completá el formulario para terminar tu compra.</p>

                        <div className="m-t_32 d-f j-c_sb a-i_fs w_100p">
                            <div className="m-r_32 w_55p">
                                {
                                    cart.map(({ item, cantidad }) => {
                                        total += (item.price * cantidad);
                                        return <CartItem key={item.id} item={item} cantidad={cantidad} />
                                    })
                                }
                            </div>

                            <form id="buyer-form" className="any-f bdr-g-l_3 bg-g-l_1 b-r_5 p_32 w_35p">
                                <div className="i-c m-b_16">
                                    <label htmlFor="name">Nombre</label>
                                    <input name="name" type="text" />
                                </div>

                                <div className="i-c m-b_16">
                                    <label htmlFor="phone">Telefono</label>
                                    <input name="phone" type="number" />
                                </div>

                                <div className="i-c">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type="email" />
                                </div>

                                <div className="error-c">
                                    <h4>Atención</h4>
                                    <p>Mensaje de error</p>
                                </div>
                            </form>

                        </div>

                        <div className="m-t_32 d-f j-c_sb a-i_c">
                            <h4 className="m_0">Total: ${total}</h4>
                            <button onClick={confirmarCompra} className="btn-primary p-l_16 p-r_16">Confirmar compra</button>
                        </div>

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