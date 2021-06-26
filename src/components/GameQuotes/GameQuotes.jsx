import "./GameQuotes.css";

export const GameQuotes = () => {
    return (
        <img className="quotes" src={process.env.PUBLIC_URL + 'games-quotes.gif'} alt="quotes" />
    )
}