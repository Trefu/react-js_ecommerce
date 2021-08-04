import firebase from 'firebase/app';
import '@firebase/firestore';
import { FIRESTORE, FIRESTORE_COLLECTIONS } from '../cfg/Firebase/Firebase';

const utilMapResponse = (r) => r.docs.map((e) => ({ id: e.id, ...e.data() }));

/**
 * Service que conteine métodos para conectarse a la base de datos de firebase y traer colecciones
 */
export const firebaseService = {

    /**
     * Las colecciones que guardamos en el archivo FirebaseCollections.js
     * // TODO: Fijarse como hacer para que esto lo devuelva dinamico
     */
    myCollections: () => FIRESTORE_COLLECTIONS,

    /**
     * Para buscar en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @return {*} Elementos encontrados
     */
    findAll: async (nameCollection) => {
        return utilMapResponse(await FIRESTORE.collection(nameCollection).get());
    },

    /**
     * Para buscar en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     */
    findAndSetAll: async (nameCollection, setterCallback) => {
        setterCallback(await firebaseService.findAll(nameCollection));
    },

    /**
     * Para buscar con filtro en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @param {*} whereFilter Filtro para el where, ej: ['price', '>', 100]
     * @return {*} Elementos encontrados
     */
    findWithFilter: async (nameCollection, whereFilter) => {
        return utilMapResponse(await FIRESTORE.collection(nameCollection).where(...whereFilter).get());
    },

    /**
     * Para buscar con filtro en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     * @param {*} whereFilter Filtro para el where, ej: ['price', '>', 100]
     */
    findAndSetWithFilter: async (nameCollection, setterCallback, whereFilter) => {
        setterCallback(await firebaseService.findWithFilter(nameCollection, whereFilter));
    },

    /**
     * Para buscar por id de documento
     * @param {*} nameCollection Nombre de la colección a buscar
     * @param {*} id Id del item a buscar
     * @return {*} Elemento encontrado
     */
    findById: async (nameCollection, id) => {
        const r = await FIRESTORE.collection(nameCollection).doc(id).get();
        return { id: r.id, ...r.data() };
    },

    /**
     * Para buscar por id de documento
     * @param {*} nameCollection Nombre de la colección a buscar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     * @param {*} id Del item a buscar
     */
    findAndSetById: async (nameCollection, setterCallback, id) => {
        setterCallback(await firebaseService.findById(nameCollection, id));
    },

    /**
     * Para agregar un item a una colección
     * @param {*} nameCollection Nombre de la colección en donde guardar el item
     * @param {*} item Item a guardar
     * @return {*} id del nuevo item
     */
    addItem: async (nameCollection, item) => {
        const { id } = await FIRESTORE.collection(nameCollection).add(item);
        return id;
    },

    /**
     * Actualiza un item
     * @param {*} nameCollection Nombre de la colección en donde esta el item
     * @param {*} id Del item a actualizar
     * @param {*} fieldsObj Campos a actualizar ej: { stock : 2500, price : 2500 }
     */
    updateItem: async (nameCollection, id, fieldsObj) => {
        await FIRESTORE.collection(nameCollection).doc(id).update(fieldsObj);
    },

    /**
     * Elimina un item
     * @param {*} nameCollection Nombre de la colección en donde esta el item
     * @param {*} id Del item a eliminar
     */
    deleteItem: async (nameCollection, id) => {
        await FIRESTORE.collection(nameCollection).doc(id).delete();
    },

    /**
     * Recibe una fecha y la parsea al tipo de firestore
     * @param {*} date Fecha a parsear
     * @returns fecha parseada
     */
    parseDate: (date) => {
        return firebase.firestore.Timestamp.fromDate(date);
    },

    /**
     * Elimina un item
     * @param {*} nameCollection Nombre de la colección en donde esta el item
     * @param {*} id Del item a eliminar
     */
    updateItemsStock: async (itemsFromCart) => {
        // Esto está mal, fijate de tenerlo en localstore
        // (Bah no sé si tan mal, porque capaz otro "usuario" compra el item y le cambia el stock, entonces habría que consultarlo de nuevo)
        let filteredItems = await firebaseService.findWithFilter(firebaseService.myCollections().ITEMS, [
            firebase.firestore.FieldPath.documentId(),
            'in',
            itemsFromCart.map(e => e.item.id)
        ]);

        filteredItems.forEach(async (unItem) => {
            // Por cada uno de los items que me traje con su stock, lo actualizo con el que va comprar el "usuario"
            let { cantidad } = itemsFromCart.find(e => e.item.id === unItem.id);
            await firebaseService.updateItem(firebaseService.myCollections().ITEMS, unItem.id, { stock: (unItem.stock - cantidad) });
        });
    },

    /**
     * @deprecated
     * Código robado de la ppt, no lo pude hacer andar al batch, seguro debe ser alguna pavada
     * @param {*} items
     */
    updateItemsStockWithBatch: async (items) => {
        const query = await FIRESTORE.collection(firebaseService.myCollections().ITEMS).where(
            firebase.firestore.FieldPath.documentId(), 'in', items.map(e => e.item.id)
        ).get();

        const batch = FIRESTORE.batch();

        query.docs.forEach((docSnapshot, idx) => {
            if (docSnapshot.data().stock >= items[idx].cantidad) {
                batch.update(
                    docSnapshot.ref,
                    { stock: (docSnapshot.data().stock - items[idx].cantidad) }
                )
            }
        })
    }

}