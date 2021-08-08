import "./PopupConfirmMessage.css";

export const PopupConfirmMessage = ({ message, buttonAbortText = 'Cancelar', buttonConfirmText = 'Aceptar', onConfirmCallback, setStateCallback }) => {

    const confirmHandler = () => {
        setStateCallback(false);
        onConfirmCallback();
    }

    return (
        <div className="modal-wrapper">
            <div className="popup-confirm-notification bdr-g-l_3 bg-g-l_1 b-r_5">
                <p>{message}</p>

                <div className="btn-container">
                    <button className="btn-primary btn-grey" onClick={() => setStateCallback(false)}>{buttonAbortText}</button>
                    <button className="btn-primary" onClick={confirmHandler}>{buttonConfirmText}</button>
                </div>

            </div>
        </div>
    );
}