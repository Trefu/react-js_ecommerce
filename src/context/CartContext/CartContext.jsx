import { createContext, useState, useEffect } from "react";

const CART_STORAGE_KEY = 'CART';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    // TODO: Mejorar todo el choclo rancio de if's
    const addItem = (item, cantidad) => {
        let index = findItemIndexById(item.id);

        if(index === -1) { // El item no existe, lo agrega
            if(cantidad > 0) { // Para prevenir que se agregue uno con la cantidad en cero
                addItemToCart(item, cantidad);
            }
        } else if(hasOtherQuantity(index, cantidad)) { // Si existe en el cart, me fijo si cambio la cantidad
            if(cantidad === 0) { // Si la cantidad recibida es cero, lo elimino
                deleteItemFromCartByIndex(index);
            } else if(cantidad > 0) { // Si la cantidad recibida es mayor, la modifico
                changeItemQuantityFromCartByIndex(index, cantidad);
            }
        }
    }

    // TODO: Tener en cuenta el stock
    const changeItemQuantityFromCartById = (id, cantidad) => {
        let index = findItemIndexById(id);
        changeItemQuantityFromCartByIndex(index, cantidad);
    }

    const deleteItemFromCartById = (id) => {
        deleteItemFromCartByIndex(findItemIndexById(id));
    }
    
    const findItemIndexById = (id) => {
        return cart.findIndex(e => e.item.id === id);
    }

    const addItemToCart = (item, cantidad) => {
        let auxCart = [...cart];
        auxCart.push({item:item, cantidad:cantidad});
        handlerSetCart(auxCart);
    }

    const deleteItemFromCartByIndex = (index) => {
        cart.splice(index, 1);
        handlerSetCart([...cart]);
    }

    const changeItemQuantityFromCartByIndex = (index, cantidad) => {
        cart[index].cantidad = cantidad;
        handlerSetCart([...cart]);
    }

    const hasOtherQuantity = (index, cantidad) => {
        return cart[index].cantidad !== cantidad;
    }

    const getItemsQuantity = () => {
        let cant = 0;
        cart.map(o => cant += o.cantidad);
        return cant;
    }

    const removeAllItems = () => {
        handlerSetCart([]);
    }

    const handlerSetCart = (cart) => {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        setCart(cart);
    }

    const handlerGetCart = () => {
        let cartFromLocalStorage = localStorage.getItem(CART_STORAGE_KEY);

        if(cartFromLocalStorage != null) {
            handlerSetCart(JSON.parse(cartFromLocalStorage));
        }

        return [];
    }

    const PROVIDER = {
        cart,
        addItem,
        changeItemQuantityFromCartById,
        getItemsQuantity,
        deleteItemFromCartById,
        removeAllItems
    }

    useEffect(() => {
        if(!cart.length) {
            handlerGetCart();
        }
    }, [/*cart*/]);

    return (
        <CartContext.Provider value={PROVIDER}>
            {children}
        </CartContext.Provider>
    )
}