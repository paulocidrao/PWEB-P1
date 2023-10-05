import { createContext, ReactNode, useState } from 'react'

import { Product } from '../components/ProductCard'

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    cartItemsTotal: number
    addToCart: (product: CartItem) => void
    removeCartItem: (cartItem: number) => void
    cleanCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addToCart(product: CartItem) {
        const productAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === product.id
        );

        let newCart;

        if (productAlreadyExistsInCart < 0) {
            // Adiciona o produto ao carrinho
            newCart = [...cartItems, { ...product }];
        } else {
            // Atualiza a quantidade se o produto já existe no carrinho
            newCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            );
        }

        setCartItems(newCart);
    }


    function removeCartItem(cartItemId: number) {
        const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

        if (coffeeExistsInCart >= 0) {
            const newCart = [...cartItems.slice(0, coffeeExistsInCart), ...cartItems.slice(coffeeExistsInCart + 1)];
            setCartItems(newCart);
        }
    }

    function cleanCart() {
        setCartItems([])
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
    )
}