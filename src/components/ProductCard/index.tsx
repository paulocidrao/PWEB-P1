import { Link } from 'react-router-dom';
import Button from '../Button';
import { CardContainer } from './styles';

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductCard({ id, title, description, price, imageUrl }: ProductProps) {
    return (
        <CardContainer>
            <Link to={`/productDetails/${id}`}>


                <img src={`/assets/${imageUrl}`} />

                <h3>{title}</h3>
                <p>{description}</p>
                <p><b>R$ {price}</b></p>

                <Button text='Comprar' />

            </Link>
        </CardContainer>
    )
}