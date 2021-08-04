import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { firebaseService } from '../../service/FirebaseService';
import { utilRemoveElement, utilGetValueByName, utilSetValueByName } from '../../utils/FunctionsUtils';

export const AddItem = () => {
    const { id } = useParams();
    const [newId, setNewId] = useState([]);

    const updateItem = async (data) => {
        await firebaseService.updateItem('items', id, data);
    }

    const addItem = async (data) => {
        let rId = await firebaseService.addItem('items', data);
        setNewId(rId);
    }

    const submitHanlder = async () => {
        let data = {
            category: utilGetValueByName("category"),
            img_url: utilGetValueByName("img_url"),
            name: utilGetValueByName("name"),
            plataform: utilGetValueByName("plataform"),
            price: utilGetValueByName("price"),
            stock: utilGetValueByName("stock")
        }

        document.getElementById("formulario").reset();

        id ? updateItem(data) : addItem(data);

        onSucces();
    }

    const onSucces = () => {
        document.querySelector('div#mensaje h4').innerHTML = id ? 'Elemento actualizado!' : 'Elemento creado!';
        document.getElementById('mensaje').style.display = 'block';

        if (id) {
            utilRemoveElement('#formulario');
            utilRemoveElement('button.btn-primary');
        }
    }

    const removeItem = async () => {
        await firebaseService.deleteItem('items', id);
        onSucces();
    }

    useEffect(() => {
        const findAndLoadItem = async () => {
            let { name, img_url, plataform, price, stock, category } = await firebaseService.findById('items', id);
            utilSetValueByName('name', name);
            utilSetValueByName('img_url', img_url);
            utilSetValueByName('plataform', plataform);
            utilSetValueByName('price', price);
            utilSetValueByName('stock', stock);
            utilSetValueByName('category', category);
        }

        if (id) findAndLoadItem();
    }, [id]);

    return (
        <div className="add-item-container basic-container m-t_32">

            <h3>[{id || newId}] {id ? 'Actualizar' : 'Agregar nuevo'} item</h3>
            <p>Esto es a modo de prueba, no debería ni pushear esto.</p>

            <div id="mensaje" className="w_50p b-r_5 bdr-g-d_1 bg-g-l_3 p_22 m-b_32" style={{ display: 'none' }}>
                <h4 className="m_0">Mensaje</h4>
                <Link className="m-t_5" to={`/item/${id ? id : newId}`}>Ver item</Link>
            </div>

            <form id="formulario" className="w_50p p_32 bdr-g-l_3 bg-g-l_1 b-r_5 m-t_32 m-b_32">

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="name">Nombre</label>
                    <input className="m-l_32" name="name" type="text" />
                </div>

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="img_url">Img url</label>
                    <input className="m-l_32" name="img_url" type="text" />
                </div>

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="category">Category</label>
                    <select className="m-l_32" name="category">
                        <option value="PC">PC</option>
                        <option value="XBOX">XBOX</option>
                        <option value="PS5">PS5</option>
                    </select>
                </div>

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="plataform">Plataform</label>
                    <input className="m-l_32" name="plataform" type="text" />
                </div>

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="price">Price</label>
                    <input className="m-l_32" name="price" type="number" />
                </div>

                <div className="d-f m-b_32">
                    <label className="w_15p m-r_32" htmlFor="stock">Stock</label>
                    <input className="m-l_32" name="stock" type="number" />
                </div>

            </form>

            <div className="d-f">
                <button className="btn-primary p-l_16 p-r_16" onClick={submitHanlder}>{id ? 'Actualizar item' : 'Agregar item'}</button>
                {id ? <button className="btn-primary bg-red p-l_16 p-r_16 m-l_32" onClick={removeItem}>{'Eliminar item'}</button> : ''}
            </div>

        </div>
    )
};