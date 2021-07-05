import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { GameQuotes } from '../GameQuotes/GameQuotes';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className="basic-container d-f a-i_c">
                <Logo />
                <GameQuotes />
                <NavBar />
            </div>
        </header>
    )
};