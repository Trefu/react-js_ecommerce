import { jsonFetch } from "./UtilsService";

/**
 * Reliza una busqueda de productos
 * @param {} query Producto a buscar
 * @returns Listado de productos encontrados
 */
export const searchItemsByQuery = async (query) => {
    return await jsonFetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
}

/**
 * Devuelve los detalles de un producto mediante su ID
 * @param {*} id del producto a buscar detalles
 * @returns Información del producto
 */
export const itemDetailById = async (id) => {
    return await jsonFetch(`https://api.mercadolibre.com/items/${id}`);
}