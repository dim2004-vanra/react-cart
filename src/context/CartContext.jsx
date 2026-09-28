import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const checkCartItemExists = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = checkCartItemExists(product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });

        const toastEl = document.getElementById('cartToast');
        const toast = new window.bootstrap.Toast(toastEl,{ delay: 2000 });
        toast.show();
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };


    const increaseQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )

        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0)
        );
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal, totalItems, checkCartItemExists }}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider;