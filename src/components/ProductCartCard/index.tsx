import { useCart } from "../../hooks/useCart";
import Button from "../Button";
import {
  ProductCartContainer,
  ProductCartDetails,
  ProductCartInfo,
} from "./styles";

import { FaTrash } from "react-icons/fa";

interface ProductCartCardProps {
  productID: number;
  imageURL: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
}

export default function ProductCartCard({
  productID,
  imageURL,
  title,
  description,
  price,
  quantity,
}: ProductCartCardProps) {
  const { removeCartItem } = useCart();

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
        <div>
          <h3>{price}</h3>
          <span>Quantidade: {quantity}</span>
        </div>

        <Button
          background="none"
          border="corner"
          icon={<FaTrash size={20} />}
          handleFunction={() => removeCartItem(productID)}
        />
      </ProductCartDetails>
    </ProductCartContainer>
  );
}
