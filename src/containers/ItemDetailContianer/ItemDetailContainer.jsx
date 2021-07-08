import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { itemDetailById as mercadoLibreitemDetailById, itemDescriptionById as mercadoLibreItemDescriptionById } from "../../service/MercadoLibreService";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [description, setDescription] = useState([]);
    
    useEffect(() => {
        const obtenerDetalle = async () => {
            setItem(await mercadoLibreitemDetailById(id));
            setDescription(await mercadoLibreItemDescriptionById(id));
        };

        obtenerDetalle();
    }, [id]);

    return (
        <section className="basic-container m-t_32">
            { item.length === 0 ? 'Cargando...' : <ItemDetail item={item} description={description.plain_text}/> }
        </section>
    )
}