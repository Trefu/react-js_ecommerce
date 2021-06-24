/* Técnicamente no creo que contaría como service, pero usted me entiende [meme-simpsons] */
export const querySearch = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data =  await response.json();
    return data.results;
}