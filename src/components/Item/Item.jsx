import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({nombre, precio, imagen, id}) => {
    return (
        <div className="item m-b_32 bdr-g-l_3 bg-g-l_1 b-r_5">
            <img src={imagen} alt={nombre}/>
            <h2>{nombre}</h2>
            <p className="ars-symbol">{precio}</p>
            <Link className="btn-primary m-t_16" to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
};