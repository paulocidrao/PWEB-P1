import { createContext, ReactNode, useEffect, useState } from "react";

import { Product } from "../components/ProductCard";
import { api } from "../lib/axios";

export interface CartItem extends Product {
  id: string,
  product: {
    id: string,
    title: string,
    description: string,
    price: number,
  },
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[] | undefined;
  cartQuantity: number | undefined;
  cartItemsTotal: number | undefined;
  addToCart: (userId: string, productId: string, quantity: number) => void;
  removeCartItem: (cartItem: string) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("user/c8f1fcec-b3e0-4e31-9fd4-54d041128466");

        if (response) {
          setCartItems(response.data.Cart[0].cartProducts)
          console.log(response.data.Cart[0].cartProducts)
        }
      } catch (error) {
        console.log("Ocorreu um erro", error);
      }
    };
    fetchData();
  }, []);

  const cartQuantity = cartItems?.length;

  const cartItemsTotal = cartItems?.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  async function addToCart(userId: string, productId: string, quantity: number) {
    try {
      const response = await api.post("/cart", {
        userId,
        productId,
        quantity
      });
      console.log("Response:", response.data);

      const updateCartItems = await api.get("user/c8f1fcec-b3e0-4e31-9fd4-54d041128466");
      setCartItems(updateCartItems.data.Cart[0].cartProducts);
    } catch (error) {
      console.log("Ocorreu um erro", error);
    }
  }

  async function removeCartItem(cartItemId: string) {
    try {
      const response = await api.delete(`/cart/product/${cartItemId}`);
      console.log("Response:", response.data);
      const updateCartItems = await api.get("user/c8f1fcec-b3e0-4e31-9fd4-54d041128466");
      setCartItems(updateCartItems.data.Cart[0].cartProducts);
    } catch (error) {
      console.log("Ocorreu um erro", error);
    }
  }

  async function cleanCart() {
    await api.delete('cart/product/deleteAll/c8f1fcec-b3e0-4e31-9fd4-54d041128466');

    const updateCartItems = await api.get("user/c8f1fcec-b3e0-4e31-9fd4-54d041128466");
    setCartItems(updateCartItems.data.Cart[0].cartProducts);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addToCart,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
