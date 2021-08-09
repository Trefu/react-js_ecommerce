# react-js_ecommerce

Repositorio para subir los avances del curso de React JS de [Coderhouse](https://www.coderhouse.com/online/reactjs).

**Profesor:** Cristian Hourcade\
**Tutor:** Nicolás Díaz\
**Camada:** 17565

## Sobre el proyecto
- El ecommerce sería sobre venta de videojuegos físicos y digitales.
- Está bastante verde, nada más seleccionas los productos a comprar, y rellenas un formulario
- Esto genera una orden en Firebase con los datos de la compra, listado de items con sus cantidades y los datos del comprador.

## Requisitos

**Dependencias:**\
`npm install firebase@8.0.2`

**Configuración de Firebase:**\
- Crear el archivo `FirebaseConfig.json` en `/src/cfg/Firebase`, pegando y completando lo siguiente:

```json
{
    "apiKey": "",
    "authDomain": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": ""
}
```

## Pendiente a mejorar
Cosas pendientes o que me gustaría agregar/mejorar sobre el proyecto, pero por falta de tiempo no pude completar.

• **Notification popup**: `PopupNotification.jsx`
- [ ] Agregarle animaciones
- [ ] Hacer las notifacioens acumulativas
- - [ ] Tipo, si ya existe el popup en pantalla, agregar uno arriba.
- - [ ] Y al completar el timeout, borrarlo, no ocultar y mostrar.

• **Detalles de un producto**: `ItemDetail`
- [ ] Si se elimina desde el CartWidget, este no se entera con el contador
- [X] Al apretar "Añadir en el carrito" notificar con un pop-up.

• **Barra lateral con el carrito**: `CartWidget.jsx`
- [ ] Usar más React para su comportamiento en lugar de js vanilla.
- [ ] Realizarle una mejora en general, tanto diseño como lógica.

• **Carrito y formulario checkout**: `Cart.jsx`
- [ ] Agregar lógica para que pueda pagar con **MercadoPago**.
- [ ] Faltan las validaciones para los tipos de datos de email y telefono
- [ ] Estaría bueno también que las validaciones estén "en vivo"
- [ ] Al eliminar un producto:
- - [X] Preguntar si está seguro de eliminar, utilizando algún modal, no usar el confirm de js.

• **Orden completa**: `Order.jsx`
- [ ] Enviar un email con un comprobante de compra.
- [ ] Dar la opción de descargar un pdf con el comprobante de compra.

• **General**:
- [X] Mejorar el readme.
- [ ] Agregar íconos.
- [ ] Corregir el responsive.
- [ ] Hacer una mejora general.
- [ ] Mejorar las clases de CSS genericas o agregar Tailwinds que tiene un buen purge.
- [ ] Fijate de clavar en variables de env la configuración de Firebase.
- [ ] Tener un registro/inicio sesión de usuario, y un panel de administrador para agregar/modificar/bajar productos.

• **Carga del listado de productos desde Firebase**: `ItemList`
- [ ] Consultar una sóla vez todos los productos, o por categoría.
- [ ] Guardarlos en localStorage con su key de categoría.
- [ ] Una vez que se confirma la venta, realizar una consulta de stock (sólo de los que se hayan vendido) y volverlo a guardar en localStorage.
