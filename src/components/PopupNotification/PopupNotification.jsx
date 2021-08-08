
import "./PopupNotification.css";

export const PopupNotification = ({ message }) => {

    return (
        <div className="popup-notification">
            <p>{message}</p>
        </div>
    );
}