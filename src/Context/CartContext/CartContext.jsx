import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([{}]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeToCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};