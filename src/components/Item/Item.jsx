import './Item.css';

export const Item = ({nombre, precio, link, imagen}) => {
    return (
        <div className="item m-b_32">
            <img src={imagen} alt={nombre}/>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            { /* <a href={link} target="_blank" rel="noreferrer">Link</a> */ }
        </div>
    )
};