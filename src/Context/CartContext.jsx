import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        const itemAdded = { ...item, quantity };

        const newCart = [...cart];
        const inCart = newCart.find((prod) => prod.id === itemAdded.id);

        if (inCart) {
            inCart.quantity += quantity;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart);

    }

    const incrementar = (itemId, increment) => {

        const nuevoCarrito = cart.map((producto) => {
            if (producto.id === itemId) {
                // Incrementa la cantidad del producto, asegurándose de no superar el stock
                return { ...producto, quantity: producto.quantity + increment};
            }
            return producto;
        });

        setCart(nuevoCarrito);

    }

    const decrementar = (itemId, decrement) => {
        const nuevoCarrito = cart.map((producto) => {
            if (producto.id === itemId) {
                // Disminuye la cantidad del producto, asegurándose de no ser menor que 0
                const nuevaCantidad = Math.max(producto.quantity - decrement, 0);
                return { ...producto, quantity: nuevaCantidad };
            }
            return producto;
        });

        setCart(nuevoCarrito);
    };

    const totalQuantity = cart.reduce(
        (acc, prod) => acc + prod.quantity,
        0
    );

    const total = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                cart, 
                total, 
                totalQuantity, 
                addItem, 
                removeItem, 
                clearCart, 
                incrementar, 
                decrementar
            }}>
            {children}
        </CartContext.Provider>
    )
}