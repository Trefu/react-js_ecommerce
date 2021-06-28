import './Item.css';

export const Item = ({nombre, precio, link, imagen}) => {
    return (
        <div className="item m-b_32 bdr-g-l_3 bg-g-l_1 b-r_5">
            <img src={imagen} alt={nombre}/>
            <h2>{nombre}</h2>
            <p className="ars-symbol">{precio}</p>
            { /* <a href={link} target="_blank" rel="noreferrer">Link</a> */ }
        </div>
    )
};