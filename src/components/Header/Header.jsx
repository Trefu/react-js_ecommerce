import { NavBar } from "../NavBar/NavBar"
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className="basic-container d-f a-i_c">
                <div className="logo-container">
                    <img className="isologo" src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" />
                    <div className="logo-text">
                        <h2>NivelX</h2>
                        <span>Club</span>
                    </div>
                </div>

                <img className="quotes" src={process.env.PUBLIC_URL + 'games-quotes.gif'} alt="quotes" />
                <NavBar/>
            </div>
        </header>
    )
};