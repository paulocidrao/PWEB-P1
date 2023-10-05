import { ProductCartContainer, ProductCartDetails, ProductCartInfo } from "./styles";

interface ProductCartCardProps {
    imageURL: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

export default function ProductCartCard({ imageURL, title, description, price, quantity }: ProductCartCardProps) {
    return (
        <ProductCartContainer>
            <ProductCartInfo>
                <div className="productImage">
                    <img src={`/assets/${imageURL}`} alt={title} />
                </div>

                <div className="titleDescription">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </ProductCartInfo>

            <ProductCartDetails>
                <h3>{price}</h3>
                <span>Quantidade: {quantity}</span>
            </ProductCartDetails>
        </ProductCartContainer>
    )
}