import { createContext, useState, useEffect } from "react";
import { PopupNotification } from "../../components/PopupNotification/PopupNotification";
import { PopupConfirmMessage } from "../../components/PopupConfirmMessage/PopupConfirmMessage";

export const UIContext = createContext();

export const UIComponentContext = ({ children }) => {

    // Este comportamiento se deberia ocupar el propio componente
    const [popupNotificationState, setPopupNotificationState] = useState(false);
    const [popupNotificationMessage, setPopupNotificationMessage] = useState('');

    /**
     * Muestra una notificación popup
     * @param {*} message Mensaje a mostrar
     */
    const showPopupNotification = (message) => {
        setPopupNotificationMessage(message);
        setPopupNotificationState(true);
    }

    // Este comportamiento se deberia ocupar el propio componente
    const [popupConfirmState, setPopupConfirmState] = useState(false);
    const [popupConfirmMessage, setPopupConfirmMessage] = useState('');
    const [popupConfirmCallback, setPopupConfirmCallback] = useState([]);

    /**
     * Muestra un dialog message, con botón aceptar y cancelar
     * @param {*} message Mensaje a mostrar
     * @param {*} confirmCallback Callback al aceptar
     */
    const showConfirmDialog = (message, confirmCallback) => {
        setPopupConfirmMessage(message);
        setPopupConfirmCallback(() => confirmCallback);
        setPopupConfirmState(true);
    }

    useEffect(() => {
        // Después de unos segundos lo vuelvo a esconder
        setTimeout(function () { setPopupNotificationState(false) }, 3000);
    }, [popupNotificationState]);

    const PROVIDER = {
        showPopupNotification,
        showConfirmDialog
    }

    return (
        <UIContext.Provider value={PROVIDER}>
            <>
                {popupNotificationState ? <PopupNotification message={popupNotificationMessage} /> : ''}
                {popupConfirmState ? <PopupConfirmMessage message={popupConfirmMessage} onConfirmCallback={popupConfirmCallback} setStateCallback={setPopupConfirmState} /> : ''}
                {children}
            </>
        </UIContext.Provider>
    )
}