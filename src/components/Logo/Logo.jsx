import { useHistory } from "react-router-dom";
import './Logo.css';

export const Logo = () => {
    const history = useHistory();

    return (
        <div onClick={() => { history.push(`/`) }} className="logo-container">
            <img className="isologo" src={'/logo.png'} alt="logo" />
            <div className="logo-text">
                <h2>NivelX</h2>
                <span>Club</span>
            </div>
        </div>
    )
}