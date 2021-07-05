import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import { ItemListSearch } from '../../components/ItemListSearch/ItemListSearch';
import { searchItemsByQuery as mercadoLibreQuerySearch } from "../../service/MercadoLibreService";

const DEFAULT_QUERY_SEARCH = 'Juegos PS4 físicos';

export const ItemListContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    const getProductos = async (query) => {
        let r = await mercadoLibreQuerySearch(query);
        setProductos(r !== null ? r.results : null);
    }

    useEffect(() => {
        getProductos(id !== undefined ? id : DEFAULT_QUERY_SEARCH);
    }, [id]);

    return (
        <>
            <section className="basic-container m-t_32">
                <ItemListSearch onSearch={getProductos}/>
                {productos === undefined || productos.length === 0 || productos === null ? "Cargando..." : <ItemList productos={productos} />}
            </section>
        </>
    )
}