import { useParams } from "react-router-dom";
import { ProductDescription, ProductDetailsContainer, ProductImageContainer, ProductInformation, ProductInformationContainer } from "./styles";

import Button from "../../components/Button";

import { products } from '../../data/products.json';

import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from "react";

export default function ProductDetails() {
    const [productQuantity, setProductQuantity] = useState<number>(0);

    const { productId } = useParams();
    const productIdAsNumber = parseInt(productId!, 10);

    const product = products[productIdAsNumber - 1];

    function changeProductQuantity(type: string) {
        type === 'minus' && productQuantity > 0 && setProductQuantity(productQuantity - 1);
        type === 'plus' && productQuantity < product.estoque && setProductQuantity(productQuantity + 1);
    }

    return (
        <ProductDetailsContainer>
            <ProductInformationContainer>
                <ProductImageContainer>
                    <div className="mainImage">
                        <img src={`/assets/${product.imageURL}`} alt={product.nome} />
                    </div>
                    <div className="secondaryImages">
                        <div>
                            <img src={`/assets/${product.imageURL}`} alt={product.nome} />
                        </div>
                        <div>
                            <img src={`/assets/${product.imageURL}`} alt={product.nome} />
                        </div>
                        <div>
                            <img src={`/assets/${product.imageURL}`} alt={product.nome} />
                        </div>
                        <div>
                            <img src={`/assets/${product.imageURL}`} alt={product.nome} />
                        </div>
                    </div>
                </ProductImageContainer>

                <ProductInformation>
                    <div>
                        <h2>{product.nome}</h2>
                        <p>{product.descricao}</p>
                    </div>

                    <div>
                        <b>R$ {product.preco}</b>
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

                        <span>
                            Apenas {product.estoque} unidades em estoque.
                        </span>
                    </div>

                    <div className="buttons">
                        <Button text="Comprar" />
                        <Button text="Adicionar ao carrinho" />
                    </div>

                </ProductInformation>
            </ProductInformationContainer>

            <ProductDescription></ProductDescription>
        </ProductDetailsContainer>
    )
}