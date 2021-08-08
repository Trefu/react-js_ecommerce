import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import { firebaseService } from '../../service/FirebaseService';
import { EmptyMessage } from '../../components/EmptyMessage/EmptyMessage';

export const ItemListContainer = () => {
    const { id: itemCategory } = useParams();
    const [productos, setProductos] = useState([]);

    const mostrarListado = () => {

        if (productos == null) {
            return <EmptyMessage title={'No hay productos disponibles para esta categoría :('} description={'Probá visitando alguna de nuestras otras categorías.'}/>
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