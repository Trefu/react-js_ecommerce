import { createContext, useState, useEffect } from "react";

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

    /*
    const findItemById = (id) => {
        return cart.find(e => e.item.id === id);
    } */
    
    const findItemIndexById = (id) => {
        return cart.findIndex(e => e.item.id === id);
    }

    const addItemToCart = (item, cantidad) => {
        let auxCart = [...cart];
        auxCart.push({item:item, cantidad:cantidad});
        setCart(auxCart);
    }

    const deleteItemFromCartByIndex = (index) => {
        cart.splice(index, 1);
        setCart([...cart]);
    }

    const changeItemQuantityFromCartByIndex = (index, cantidad) => {
        cart[index].cantidad = cantidad;
        setCart([...cart]);
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
        setCart([]);
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
        // Dejo el useEffect junto con la consola para propositos de testing
        console.log(cart);
    }, [cart]);

    return (
        <CartContext.Provider value={PROVIDER}>
            {children}
        </CartContext.Provider>
    )
}