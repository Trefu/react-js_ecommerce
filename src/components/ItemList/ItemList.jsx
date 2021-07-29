import { Item } from '../Item/Item';

export const ItemList = ({ productos }) => {
    let itemsList = productos.map((p) => {
        return <Item nombre={p.name} precio={p.price} imagen={p.img_url} id={p.id} key={p.id} />;
    });

    return (
        <div className="d-f f-d_r f-w_w j-c_sb">
            {itemsList}
        </div>
    )
};