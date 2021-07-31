import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { firebaseService } from '../../service/FirebaseService';
import { utilRemoveElement, utilGetValueByName, utilSetValueByName } from '../../utils/FunctionsUtils';

export const AddItem = () => {
    const { id } = useParams();
    const [newId, setNewId] = useState([]);

    const findAndLoadItem = async () => {
        let { name, img_url, plataform, price, stock, category } = await firebaseService.findById('items', id);
        utilSetValueByName('name', name);
        utilSetValueByName('img_url', img_url);
        utilSetValueByName('plataform', plataform);
        utilSetValueByName('price', price);
        utilSetValueByName('stock', stock);
        utilSetValueByName('category', category);
    }

    const updateItem = async (data) => {
        console.log('Se va actualizar el item');
        await firebaseService.updateItem('items', id, data);
        console.log(`Item actualizado con éxito (????)`);
    }

    const addItem = async (data) => {
        console.log('Se va crear el item');
        let rId = await firebaseService.addItem('items', data);
        setNewId(rId);
        console.log(`Item creado con éxito -> ${newId}`);
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
        console.log('Se recogió la data ->', data);

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

    useEffect(() => {
        if (id) findAndLoadItem();
    }, [id]);

    return (
        <div className="add-item-container basic-container m-t_32">
            
            

            <h3>[{id || newId}] {id ? 'Actualizar' : 'Agregar nuevo'} item</h3>
            <p>Esto es a modo de prueba, no debería ni pushear esto.</p>

            <div id="mensaje" className="w_50p b-r_5 bdr-g-d_1 bg-g-l_3 p_22 m-b_32" style={{ display: 'none' }}>
                <h4 className="m_0"></h4>
                <Link className="m-t_5" to={`/item/${id ? id : newId}`}>Ver item</Link>
            </div>

            <form id="formulario" className="m-w_25p p_32 bdr-g-l_3 bg-g-l_1 b-r_5 m-t_32 m-b_32">

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="name">Nombre</label>
                    <input name="name" type="text" />
                </div>

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="img_url">Img url</label>
                    <input name="img_url" type="text" />
                </div>

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="PC">PC</option>
                        <option value="XBOX">XBOX</option>
                        <option value="PS5">PS5</option>
                    </select>
                </div>

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="plataform">Plataform</label>
                    <input name="plataform" type="text" />
                </div>

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="price">Price</label>
                    <input name="price" type="number" />
                </div>

                <div className="d-f j-c_sb m-b_32">
                    <label htmlFor="stock">Stock</label>
                    <input name="stock" type="number" />
                </div>

            </form>

            <button className="btn-primary p-l_32 p-r_32" onClick={submitHanlder}>{id ? 'Actualizar item' : 'Agregar item'}</button>

        </div>
    )
};