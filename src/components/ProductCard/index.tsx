import { Link } from "react-router-dom";
import Button from "../Button";
import { CardContainer } from "./styles";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";

import toast, { Toaster } from 'react-hot-toast';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  photo: string;
}

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const { addToCart, cartItems } = useCart();

  const notify = () => toast.success('Produto adicionado no seu carrinho.');

  function handleAddToCart() {
    addToCart("c8f1fcec-b3e0-4e31-9fd4-54d041128466", product.id!, 1);
    notify();
  }


  return (
    <CardContainer>
      <Link to={`/productDetails/${product.id}`}>
        <img src={product.photo} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          <b>{formatCurrency(product.price)}</b>
        </p>
      </Link>

      <Button
        text={
          cartItems?.some((item) => item.id === product.id)
            ? "Adicionado"
            : "Adicionar ao carrinho"
        }
        border="corner"
        icon={<FaShoppingCart size={20} />}
        background={
          cartItems?.some((item) => item.id === product.id)
            ? "successColor"
            : "primaryColor"
        }
        handleFunction={handleAddToCart}
      />
      <Toaster position="top-right" />
    </CardContainer>
  );
}
