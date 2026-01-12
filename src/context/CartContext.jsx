import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItemFromCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("CART STATE", cart);
  }, [cart]);

  const addToCart = (product) => {
    if (!product || !product.id) return;

    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };
  const removeItemFromCart = (id) => {
    console.log("REMOVE ID", id);
    setCart((prev) => prev?.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
