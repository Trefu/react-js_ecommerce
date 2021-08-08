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

/**
 * Utils que contiene funcionalidad genericas para los formularios
 */
export const utilsForm = {

    /**
     * Muestra un mensaje de error debajo del input
     * @param {*} message Mensaje a mostrar
     * @param {*} formId Id del fomulario
     * @param {*} name Nombre del input para hacer query
     */
    highLightInputError: (message, formId, name) => {
        let element = document.querySelector(`form#${formId}.any-f div.i-c input[name=${name}]`);
        let span = document.createElement('span');
        span.classList.add("error-leyenda");
        span.innerText = message;
        element.parentNode.insertBefore(span, element.nextSibling);
    },

    /**
     * Muestra el mensaje de eror del formulario.
     * El mensaje se va mostrar en donde se haya ubicado, dentro del form el elemento.
     * @example <div className="error-c">
     *  <h4>Atención</h4>
     *  <p>Mensaje de error</p>
     * </div>
     * @param {*} message Mensaje a mostrar
     * @param {*} formId Id del fomulario
     */
    showFormError: (message, formId) => {
        document.querySelector(`#${formId} div.error-c p`).innerText = message;
        document.querySelector(`#${formId} div.error-c`).style.display = "block";
    },

    /**
     * Limpia los mensajes de error que puedan tener el formulario
     * @param {*} formId Id del fomulario
     */
    cleanFormErrorMessages: (formId) => {
        utilRemoveElements(`#${formId} span.error-leyenda`);
        document.querySelector(`#${formId} div.error-c`).style.display = "none";
    },

    /**
     * Recorre los campos de un formulario viendo si están completados
     * @param {*} formId Id dle fomrulario
     * @param {array} requiredFields lista de input names que son obligatorios
     * @param {*} inputMessage mensaje a mostrar debajo del input
     * @param {*} generalMessage mensaje general a mostrar
     * @returns Si es valido o no
     */
    validateRequiredFields: (formId, requiredFields, inputMessage, generalMessage) => {
        utilsForm.cleanFormErrorMessages(formId);
        let itsOk = true;

        for (let name of requiredFields) {
            if (!utilGetValueByName(name)) {
                utilsForm.highLightInputError(inputMessage, formId, name);
                itsOk = false;
            }
        }

        if (!itsOk) {
            utilsForm.showFormError(generalMessage, formId);
        }

        return itsOk;
    }
}