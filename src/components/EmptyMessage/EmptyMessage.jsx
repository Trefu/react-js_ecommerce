import { Link } from "react-router-dom";

export const EmptyMessage = ({ title = 'No hay items en el carrito :(', description = 'Probá reventando la tarjeta con alguno de nuestros productos.' }) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={'/'} alt='Buscar productos'>Ver catálogo</Link>
        </>
    );
}