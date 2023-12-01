import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../Button";
import {
  ProductCartContainer,
  ProductCartDetails,
  ProductCartInfo,
} from "./styles";

import { FaTrash } from "react-icons/fa";

interface CartProduct {
  productId: string,
  product: {
    id: string,
    title: string,
    description: string,
    price: number,
  },
  quantity: number
}

export default function ProductCartCard({
  productId,
  product: { id },
  quantity
}: CartProduct) {
  const { removeCartItem } = useCart();
  const { data } = useProducts();

  const productInfo = data?.find(product => product.id === id)

  return (
    <ProductCartContainer>
      <ProductCartInfo>
        <div className="productImage">
          <img src={productInfo?.photos[0].photo_url} alt={productInfo?.title} />
        </div>

        <div className="titleDescription">
          <h2>{productInfo?.title}</h2>
          <p>{productInfo?.description}</p>
        </div>
      </ProductCartInfo>

      <ProductCartDetails>
        <div>
          <h3>{formatCurrency(productInfo?.price)} <span>(cada)</span></h3>
          <span>Quantidade: {quantity}</span>
        </div>

        <Button
          background="none"
          border="corner"
          icon={<FaTrash size={20} />}
          handleFunction={() => removeCartItem(productId)}
        />
      </ProductCartDetails>
    </ProductCartContainer>
  );
}
