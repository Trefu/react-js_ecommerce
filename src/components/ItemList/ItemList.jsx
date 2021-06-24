import { Item } from '../Item/Item';

export const ItemList = ({ productos }) => {
    let itemsList = productos.map((p) => {
        return <Item nombre={p.title} precio={p.price} link={p.permalink} imagen={p.thumbnail} key={p.id} />;
    });

    return (
        <div className="d-f f-d_r f-w_w j-c_sb">
            {itemsList}
        </div>
    )
};