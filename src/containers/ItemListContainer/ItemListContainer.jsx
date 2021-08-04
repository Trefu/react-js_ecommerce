import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import { firebaseService } from '../../service/FirebaseService';

export const ItemListContainer = () => {
    const { id: itemCategory } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (itemCategory) {
            firebaseService.findAndSetWithFilter(firebaseService.myCollections().ITEMS, setProductos, ['category', '==', itemCategory]);
        } else {
            firebaseService.findAndSetAll(firebaseService.myCollections().ITEMS, setProductos);
        }
    }, [itemCategory]);

    return (
        <>
            <section className="basic-container m-t_32">
                {productos === undefined || productos.length === 0 || productos === null ? "Cargando..." : <ItemList productos={productos} />}
            </section>
        </>
    )
}