import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { firebaseService } from '../../service/FirebaseService';
import { utilGetValueByName, utilsForm } from '../../utils/FunctionsUtils';
import { CartContext } from '../../context/CartContext/CartContext';
import { Cart } from '../../components/Cart/Cart';
import { BuyerForm } from '../../components/BuyerForm/BuyerForm';
import { CartEmptyMessage } from '../../components/CartEmptyMessage/CartEmptyMessage';


export const CartContainer = () => {
    const FORM_ID = 'buyer-form';
    const { cart, removeAllItems } = useContext(CartContext);
    const history = useHistory();
    const [total, setTotal] = useState(0);
    const [processing, setProcessing] = useState(false);

    const confirmarCompra = async () => {
        if (utilsForm.validateRequiredFields(FORM_ID, ['name', 'phone', 'email'], 'Campo vacío', 'Debes completar el formulario')) {
            setProcessing(true);

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

            await firebaseService.updateItemsStock(data.items); // Actualizo el stock
            let orderId = await firebaseService.addItem(firebaseService.myCollections().ORDERS, data); // Genero la orden
            removeAllItems(); // Limpio el Cart
            history.push(`/order/${orderId}`); // Llevo el usuario al order
        }
    }

    return (
        <section className="basic-container m-t_32">
            {
                cart.length ?
                    <>
                        <h1 className="m_0">Checkout</h1>
                        <p className="m-t_12 m-b_0">Completá el formulario para terminar tu compra.</p>

                        <div className="m-t_32 d-f j-c_sb a-i_fs w_100p">
                            <Cart cart={cart} setTotal={setTotal} />
                            <BuyerForm formId={FORM_ID} />
                        </div>

                        <div className="m-t_32 d-f j-c_sb a-i_c">
                            <h4 className="m_0">Total: ${total}</h4>
                            { processing ? 'Procesando...' : <button onClick={confirmarCompra} className="btn-primary p-l_16 p-r_16">Confirmar compra</button> }
                        </div>
                    </>
                    :
                    <CartEmptyMessage />
            }
        </section>
    );
}