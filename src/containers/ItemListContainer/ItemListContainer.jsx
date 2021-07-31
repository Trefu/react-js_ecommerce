import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
//import { ItemListSearch } from '../../components/ItemListSearch/ItemListSearch';
import { firebaseService } from '../../service/FirebaseService';

const ITEMS_COLLECTION_NAME = 'items';

export const ItemListContainer = () => {
    const { id: itemCategory } = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        if(itemCategory) {
            firebaseService.findAndSetWithFilter(ITEMS_COLLECTION_NAME, setProductos, ['category', '==', itemCategory]);
        } else {
            firebaseService.findAndSetAll(ITEMS_COLLECTION_NAME, setProductos);
        }
    }, [itemCategory]);

    return (
        <>
            <section className="basic-container m-t_32">
                {/* <ItemListSearch onSearch={getProductos}/> */}
                {  productos === undefined || productos.length === 0 || productos === null ? "Cargando..." : <ItemList productos={productos} /> }
            </section>
        </>
    )
}