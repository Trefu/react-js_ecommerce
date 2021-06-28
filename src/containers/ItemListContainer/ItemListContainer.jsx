import React, { useState, useEffect } from 'react';
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { ItemList } from '../../components/ItemList/ItemList';
import { searchItemsByQuery as mercadoLibreQuerySearch } from "../../service/MercadoLibreService";

export const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    const getProductos = async (query) => {
        let r = await mercadoLibreQuerySearch(query);
        setProductos(r !== undefined ? r.results : undefined);
    }

    useEffect(() => {
        /* Por defecto trae zapatillas */
        getProductos('Juegos ps4 fisicos');
    }, []);

    return (
        <>
            <section className="basic-container m-t_32">
                <p> {saludo} </p>
                <br />
                <ItemCount stock={5} initial={1} />
            </section>

            <section className="basic-container m-t_32">

                { /* No lo pedía el ejercicio pero me dio curiosidad agregarlo TODO: Debería ser un componente y agregarle CSS */}
                <div className="m-b_32">
                    <input id="buscador" placeholder="Buscar productos..." type="text"></input>
                    <button onClick={() => { getProductos(document.getElementById('buscador').value) }}>Buscar</button>
                </div>

                { productos === undefined || productos.length === 0 ? "Cargando..." : <ItemList productos={productos} />}
            </section>
        </>
    )
}