import './Logo.css';

export const Logo = () => {
    return (
        <div className="logo-container">
            <img className="isologo" src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" />
            <div className="logo-text">
                <h2>NivelX</h2>
                <span>Club</span>
            </div>
        </div>
    )
}