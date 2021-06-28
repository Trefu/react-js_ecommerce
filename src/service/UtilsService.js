/**
 * Hace un fetch y parsea en json la respuesta
 * @todo Hacer un mejor error handler
 * @param {*} url Indica donde hacer fetch
 * @returns Respuesta en json, si hubo error: undefined
 */
 export const jsonFetch = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(e) {
        console.error(`Error en la petición de ${url}`);
        return undefined;
    }
}