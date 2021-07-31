import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { firebaseService } from '../../service/FirebaseService';

const MOCKED_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        firebaseService.findAndSetById('items', setItem, id);
    }, [id]);

    return (
        <section className="basic-container m-t_32">
            { item.length === 0 ? 'Cargando...' : <ItemDetail item={item} description={MOCKED_DESCRIPTION}/> }
        </section>
    )
}