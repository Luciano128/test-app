import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type ShoppingCartProvidersProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  cartQuantity: number;
  cartItems: CartItem[];
  increaseCartQuantity: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProvidersProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ increaseCartQuantity, cartItems, cartQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
