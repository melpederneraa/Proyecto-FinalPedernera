import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));
  const clear = () => setCart([]);
  const totalPrice = () => cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const totalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
