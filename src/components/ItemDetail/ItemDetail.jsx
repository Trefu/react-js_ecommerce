import './ItemDetail.css';
// import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ item, description }) => {
    return (
        <div className="item-detail p_32 bdr-g-l_3 bg-g-l_1 b-r_5 d-f a-i_c row-to-column_in-980">
            <img src={item.pictures[0].url} alt="" />
            <div className="d-f f-d_c m-l_32">
                <h1 className="m_0 m-b_16">{item.title}</h1>
                <h3 className="m_0 ars-symbol">{item.price}</h3>
                <p>{description}</p>
                {/* <ItemCount stock={item.available_quantity} initial={0}/> */ }
            </div>
        </div>
    )
}