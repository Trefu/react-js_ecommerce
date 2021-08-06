import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import { firebaseService } from '../../service/FirebaseService';

export const ItemListContainer = () => {
    const { id: itemCategory } = useParams();
    const [productos, setProductos] = useState([]);

    const mostrarListado = () => {

        if (productos == null) {
            return (<h3>No hay productos disponibles para esta categoría :(</h3>);
        } else if (!productos.length) {
            return (<h3>Cargando...</h3>);
        }

        return <ItemList productos={productos} />
    }

    useEffect(() => {
        const obtenerProductos = async () => {
            let response = [];

            if (itemCategory) {
                response = await firebaseService.findWithFilter(firebaseService.myCollections().ITEMS, ['category', '==', itemCategory]);
            } else {
                response = await firebaseService.findAll(firebaseService.myCollections().ITEMS);
            }

            setProductos(response.length ? response : null);
        }

        obtenerProductos();
    }, [itemCategory]);

    return (
        <>
            <section className="basic-container m-t_32">
                {mostrarListado()}
            </section>
        </>
    )
}