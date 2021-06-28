import "./GameQuotes.css";
import React, { useState, useEffect } from 'react';

/**
 * Cambia las citas de los videojuegos utilizando un contador y haciendo provecho de useEffect
 * @todo: Hacer que revise la cpartea /quotes y detecte automaticamente las imagenes nombradas con su respectiva frase
 * @fuente_contador https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3
 * @returns GameQuotes component
 */
export const GameQuotes = () => {
    const [counter, setCounter] = useState(1);
    const IMG_PATH = process.env.PUBLIC_URL + 'quotes/';
    const QUOTES_AND_IMAGES = [
        ['¡Detrás de ti, imbecil!', 'Wololo!', 'Mrglglglgl', 'Go go go!', 'Waka waka', '¡Solo teníamos que seguir al Maldito Tren, CJ!', 'Thank you!'],
        ['rs4', 'monje', 'murloc', 'ct' , 'pacman', 'smoke', 'tnkyou']
    ];

    useEffect(() => {
        setTimeout(() => counter < QUOTES_AND_IMAGES[0].length - 1 ? setCounter(counter+1) : setCounter(0), 3 * 1000);
    }, [counter]);

    return (
        <div className="gamequotes m-l_32">
            <img src={IMG_PATH + QUOTES_AND_IMAGES[1][counter] + '.png'} alt="quotes" />
            <p>{'“' + QUOTES_AND_IMAGES[0][counter] + '”'}</p>
        </div>
    )
}