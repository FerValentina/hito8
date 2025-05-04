import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);
    if (exists) {
      setCart(
        cart.map((p) => 
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((p) => p.id !== pizzaId));
  };

  const increase = (pizzaId) => {
    setCart(
      cart.map((p) => 
        p.id === pizzaId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrease = (pizzaId) => {
    setCart(
      cart
        .map((p) => 
          p.id === pizzaId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  );
};
