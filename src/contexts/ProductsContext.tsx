import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from "../lib/axios";

interface ProductsContextProviderProps {
    children: ReactNode
}

export interface Products {
    id: string;
    title: string;
    description: string;
    price: number;
    photos: [
        {
            id: string;
            photo_url: string;
        }
    ];
    stock: [
        {
            id: string;
            quantity: number;
        }
    ]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextType {
    data: Products[] | null;
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [data, setData] = useState<Products[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/products");
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.log("Ocorreu um erro", error);
            }
        };
        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={{
            data,
        }}>
            {children}
        </ProductsContext.Provider>
    );
}