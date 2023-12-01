import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext';

export function useProducts() {
  const context = useContext(ProductsContext)
  return context;
}