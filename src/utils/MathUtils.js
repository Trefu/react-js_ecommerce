/**
 * Devuelve un número random desde un determinado rango
 * @param {*} min Número mínimo a devolver
 * @param {*} max Número máximo a devolver
 * @returns Número aleatorio
 */
export const getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * max) + min);
}