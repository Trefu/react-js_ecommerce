import { useEffect, useState } from "react";
import { itemDetailById as mercadoLibreitemDetailById, itemDescriptionById as mercadoLibreItemDescriptionById } from "../../service/MercadoLibreService";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

// Esto lo debería recibir por parámetro
const MOCK_ITEM_ML_ID = 'MLA911112983';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [description, setDescription] = useState([]);

    const obtenerDetalle = async () => {
        setItem(await mercadoLibreitemDetailById(MOCK_ITEM_ML_ID));
        setDescription(await mercadoLibreItemDescriptionById(MOCK_ITEM_ML_ID));
    }

    useEffect(() => {
        obtenerDetalle();
    }, []);

    return (
        <section className="basic-container m-t_32">
            { item.length === 0 ? 'Cargando...' : <ItemDetail item={item} description={description.plain_text}/> }
        </section>
    )
}