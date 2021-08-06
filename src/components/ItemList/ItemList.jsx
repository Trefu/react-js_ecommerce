import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ productos }) => {
    let itemsList = productos.map((p) => {
        return <Item nombre={p.name} precio={p.price} imagen={p.img_url} id={p.id} hasStock={(p.stock > 0)} plataforma={p.plataform} key={p.id} />;
    });

    return (
        <div className="item-list">
            {itemsList}
        </div>
    )
};