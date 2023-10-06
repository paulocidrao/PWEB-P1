import { Link } from 'react-router-dom';
import Button from '../Button';
import { CardContainer } from './styles';

import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock?: number;
    imageUrl: string;
}

interface ProductProps {
    product: Product;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductCard({ product }: ProductProps) {
    const { addToCart, cartItems } = useCart();

    function handleAddToCart() {
        const productToAdd = {
            ...product,
            quantity: 1,
        }
        addToCart(productToAdd)
    }

    return (
        <CardContainer>
            <Link to={`/productDetails/${product.id}`}>
                <img src={`/assets/${product.imageUrl}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><b>{formatCurrency(product.price)}</b></p>
            </Link>

            <Button
                text={
                    cartItems.some((item) => item.id === product.id) ? 'Adicionado' : 'Adicionar ao carrinho'
                }
                border='corner'
                icon={<FaShoppingCart size={20} />}
                background={
                    cartItems.some((item) => item.id === product.id) ? 'successColor' : 'primaryColor'
                }
                handleFunction={handleAddToCart}
            />
        </CardContainer>
    )
}