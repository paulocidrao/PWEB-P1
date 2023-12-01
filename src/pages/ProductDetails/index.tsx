import { useParams } from "react-router-dom";
import {
  ProductDescription,
  ProductDetailsContainer,
  ProductImageContainer,
  ProductInformation,
  ProductInformationContainer,
} from "./styles";

import Button from "../../components/Button";

import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { Products } from "../../contexts/ProductsContext";
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetails() {
  const { data } = useProducts();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const { productId } = useParams();
  const productCart: Products | undefined = data!.find((product) => product.id === productId);

  function changeProductQuantity(type: string) {
    type === "minus" &&
      productQuantity > 1 &&
      setProductQuantity(productQuantity - 1);
    type === "plus" &&
      productQuantity < productCart!.stock[0].quantity! &&
      setProductQuantity(productQuantity + 1);
  }

  const notify = () => toast.success('Produto adicionado no seu carrinho.');

  function handleAddToCart() {
    const productToAdd = {
      userId: "c8f1fcec-b3e0-4e31-9fd4-54d041128466",
      productId: productCart?.id,
      quantity: productQuantity
    };
    addToCart(productToAdd.userId, productToAdd.productId!, productToAdd.quantity);
    notify();
  }


  return (
    <ProductDetailsContainer>
      <ProductInformationContainer>
        <ProductImageContainer>
          <div className="mainImage">
            <img src={productCart!.photos[0].photo_url} alt={productCart!.title} />
          </div>
          <div className="secondaryImages">
            <div>
              <img
                src={productCart!.photos[0].photo_url}
                alt={productCart!.title}
              />
            </div>
            <div>
              <img
                src={productCart!.photos[0].photo_url} alt={productCart!.title}
              />
            </div>
            <div>
              <img
                src={productCart!.photos[0].photo_url} alt={productCart!.title}
              />
            </div>
            <div>
              <img
                src={productCart!.photos[0].photo_url} alt={productCart!.title}
              />
            </div>
          </div>
        </ProductImageContainer>

        <ProductInformation>
          <div>
            <h2>{productCart!.title}</h2>
            <p>{productCart!.description}</p>
          </div>

          <div>
            <b>{formatCurrency(productCart!.price)}</b>
          </div>

          <div className="quantity">
            <div>
              <button onClick={() => changeProductQuantity("minus")}>
                <FaMinus size={18} />
              </button>
              <span>{productQuantity}</span>
              <button onClick={() => changeProductQuantity("plus")}>
                <FaPlus size={18} />
              </button>
            </div>

            <span>Apenas {productCart?.stock[0].quantity} unidades em estoque.</span>
          </div>

          <div className="buttons">
            <Button
              text="Adicionar ao carrinho"
              border="corner"
              icon={<FaShoppingCart size={20} />}
              handleFunction={handleAddToCart}
            />
            <Toaster position="top-right" />
          </div>
        </ProductInformation>
      </ProductInformationContainer>

      <ProductDescription></ProductDescription>
    </ProductDetailsContainer>
  );
}
