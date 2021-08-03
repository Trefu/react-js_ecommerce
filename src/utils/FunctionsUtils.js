/**
 * Devuelve un número random desde un determinado rango
 * @param {*} min Número mínimo a devolver
 * @param {*} max Número máximo a devolver
 * @returns Número aleatorio
 */
export const getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * max) + min);
}

/**
 * Elimina un elemento del DOM
 * @param {*} querySelector Selector del elemento a borrar
 */
export const utilRemoveElement = (querySelector) => {
    let e = document.querySelector(querySelector);
    e.parentNode.removeChild(e);
}

/**
 * Elimina uno o varios elementos del DOM
 * @param {*} querySelectorAll Selector del elemento a borrar
 */
 export const utilRemoveElements = (querySelectorAll) => {
    document.querySelectorAll(querySelectorAll).forEach(e => e.parentNode.removeChild(e));
}

/**
 * Devuelve el value que tenga un input
 * @param {*} name Name del input
 * @returns Value del input
 */
export const utilGetValueByName = (name) => {
    return document.getElementsByName(name)[0].value;
}

/**
 * Actualiza o agrega el value a un input
 * @param {*} name Name del input
 * @param {*} value Value del input
 */
export const utilSetValueByName = (name, value) => {
    document.getElementsByName(name)[0].value = value;
}