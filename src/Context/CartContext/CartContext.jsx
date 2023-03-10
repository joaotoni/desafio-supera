import { createContext, useState} from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState([]);
  
    function addProductToCart(card) {
      const copyProductsCart = productsCart.length == 0 ? [] : [...productsCart];
  
      const item = copyProductsCart?.find((product) => product.id === card.id);
  
      if (!item) {
        copyProductsCart.push({ ...card, qtd: 1 });
      } else {
        item.qtd = item.qtd + 1;
      }
      setProductsCart(copyProductsCart);
    }
    
    function removeProductToCart(id) {
      const copyProductsCart = [...productsCart];
  
      const item = copyProductsCart.find((product) => product.id === id);
  
      if (item && item.qtd > 1) {
        item.qtd = item.qtd - 1;
        setProductsCart(copyProductsCart);
      } else {
        const arrayFiltered = copyProductsCart.filter(
          (product) => product.id !== id
        );
        setProductsCart(arrayFiltered);
      }
    }
  
    function clearCart() {
      setProductsCart([]);
    }
  
    return (
      <CartContext.Provider
        value={{ productsCart, addProductToCart, removeProductToCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    )
}
