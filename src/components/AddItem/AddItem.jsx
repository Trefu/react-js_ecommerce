import { firebaseService } from '../../service/FirebaseService';

export const AddItem = () => {
    const getValue = (name) => {
        return document.getElementsByName(name)[0].value;
    }

    const addItem = async () => {
        let data = {
            category: getValue("category"),
            img_url: getValue("img_url"),
            name: getValue("name"),
            plataform: getValue("plataform"),
            price: getValue("price"),
            stock: getValue("stock")
        }

        document.getElementById("formulario").reset();

        console.log(data)        

        let id = await firebaseService.addItem('items', data);
        console.log(id);        
    }

    return (
        <div className="basic-container m-t_32">
            <h3>Agregar nuevo item</h3>
            <p>Esto es a modo de prueba, no debería ni pushear esto.</p>

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

            <button className="btn-primary p-l_32 p-r_32" onClick={addItem}>Enviar</button>

        </div>
    )
};