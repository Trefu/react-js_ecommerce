import { FIRESTORE } from '../cfg/Firebase/Firebase';

const utilMapResponse = async (r) => r.docs.map((e) => ({ id: e.id, ...e.data() }));

/**
 * Service que conteine métodos para conectarse a la base de datos de firebase y traer colecciones
 */
export const firebaseService = {

    /**
     * Para buscar en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     */
    findAll: async (nameCollection, setterCallback) => {
        setterCallback(await utilMapResponse(await FIRESTORE.collection(nameCollection).get()));
    },

    /**
     * Para buscar con filtro en la base de datos de Firebase
     * @param {*} nameCollection Nombre de la colección a encontrar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     * @param {*} whereFilter Filtro para el where, ej: ['price', '>', 100]
     */
    findWithFilter: async (nameCollection, setterCallback, whereFilter) => {
        setterCallback(await utilMapResponse(await FIRESTORE.collection(nameCollection).where(...whereFilter).get()));
    },

    /**
     * Para buscar por id de documento
     * @param {*} nameCollection Nombre de la colección a buscar
     * @param {*} setterCallback Callback del setter para guardar el resultado
     * @param {*} id Id del item a buscar
     */
    findById: async (nameCollection, setterCallback, id) => {
        const r = await FIRESTORE.collection(nameCollection).doc(id).get();
        console.log(`Se encontró el item ${r.data().name}`);
        setterCallback({ id:r.id, ...r.data() })
    },

    /**
     * Para agregar un item a una colección
     * @param {*} nameCollection Nombre de la colección en donde guardar el item
     * @param {*} item Item a guardar
     */
    addItem: async (nameCollection, item) => {
        const r = await FIRESTORE.collection(nameCollection).add(item);
        console.log(`Se agregó nuevo item con la id [${r.id}] a la colección [${nameCollection}]`);
    }

}