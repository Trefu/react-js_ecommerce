import { createContext, useState, useEffect } from "react";
import { PopupNotification } from "../../components/PopupNotification/PopupNotification";

export const UIContext = createContext();

export const UIComponentContext = ({ children }) => {
    const [state, setState] = useState(false);
    const [messageState, setMessageState] = useState('');

    const showPopupNotification = (message) => {
        console.log(message);
        setMessageState(message);
        setState(true);
    }

    useEffect(() => {
        // Después de unos segundos lo vuelvo a esconder
        setTimeout(function () { setState(false) }, 3000);
    }, [state])

    const PROVIDER = {
        showPopupNotification
    }

    return (
        <UIContext.Provider value={PROVIDER}>
            <>
                {state ? <PopupNotification message={messageState} /> : ''}
                {children}
            </>
        </UIContext.Provider>
    )
}