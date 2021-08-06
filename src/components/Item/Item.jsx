import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ nombre, precio, imagen, id, plataforma, hasStock }) => {
    
    /**
     * TODO: Esto me debería devolver el ícono de la plataforma, si es que tuviera, si no, nada.
     */
    const getPlataformIcon = (plataform) => {
        return plataform;
    }

    return (
        <div className={`item bdr-g-l_3 bg-g-l_1 ${hasStock ? '' : 'out-stock'}`}>
            
            <div className="item-img">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="item-detail">
                <span>{getPlataformIcon(plataforma)}</span>
                <h2>{nombre}</h2>
                <p className="ars-symbol">{precio}</p>
                {
                    hasStock ?
                        <Link className="btn-primary m-t_16" to={`/item/${id}`} >Ver detalle</Link>
                        :
                        <Link className="btn-primary disabled m-t_16">Sin stock</Link>
                }
            </div>
        </div>
    )
};