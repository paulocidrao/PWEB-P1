// import { useParams } from "react-router-dom";
// import { ProductDescription, ProductDetailsContainer, ProductImageContainer, ProductInformation, ProductInformationContainer } from "./styles";

// import Button from "../../components/Button";

// import { products } from '../../data/products.json';

// import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'
// import { useState } from "react";
// import { formatCurrency } from "../../utils/formatCurrency";
// import { useCart } from "../../hooks/useCart";
// import { Product } from "../../components/ProductCard";

// export default function ProductDetails() {
//     const [productQuantity, setProductQuantity] = useState<number>(1);
//     const { addToCart } = useCart();

//     const { productId } = useParams();
//     const productIdAsNumber = parseInt(productId!, 10);

//     const productCart: Product = products[productIdAsNumber - 1];

//     function changeProductQuantity(type: string) {
//         type === 'minus' && productQuantity > 1 && setProductQuantity(productQuantity - 1);
//         type === 'plus' && productQuantity < productCart.stock! && setProductQuantity(productQuantity + 1);
//     }

//     function handleAddToCart() {
//         const productToAdd = {
//             ...productCart,
//             quantity: productQuantity,
//         }
//         addToCart(productToAdd);
//     }

//     return (
//         <ProductDetailsContainer>
//             <ProductInformationContainer>
//                 <ProductImageContainer>
//                     <div className="mainImage">
//                         <img src={`/assets/${productCart.imageUrl}`} alt={productCart.title} />
//                     </div>
//                     <div className="secondaryImages">
//                         <div>
//                             <img src={`/assets/${productCart.imageUrl}`} alt={productCart.title} />
//                         </div>
//                         <div>
//                             <img src={`/assets/${productCart.imageUrl}`} alt={productCart.title} />
//                         </div>
//                         <div>
//                             <img src={`/assets/${productCart.imageUrl}`} alt={productCart.title} />
//                         </div>
//                         <div>
//                             <img src={`/assets/${productCart.imageUrl}`} alt={productCart.title} />
//                         </div>
//                     </div>
//                 </ProductImageContainer>

//                 <ProductInformation>
//                     <div>
//                         <h2>{productCart.title}</h2>
//                         <p>{productCart.description}</p>
//                     </div>

//                     <div>
//                         <b>{formatCurrency(productCart.price)}</b>
//                     </div>

//                     <div className="quantity">
//                         <div>
//                             <button onClick={() => changeProductQuantity("minus")}>
//                                 <FaMinus size={18} />
//                             </button>
//                             <span>{productQuantity}</span>
//                             <button onClick={() => changeProductQuantity("plus")}>
//                                 <FaPlus size={18} />
//                             </button>
//                         </div>

//                         <span>
//                             Apenas {productCart.stock} unidades em estoque.
//                         </span>
//                     </div>

//                     <div className="buttons">
//                         <Button
//                             text="Adicionar ao carrinho"
//                             border="corner"
//                             icon={<FaShoppingCart size={20} />}
//                             handleFunction={handleAddToCart}
//                         />
//                     </div>

//                 </ProductInformation>
//             </ProductInformationContainer>

//             <ProductDescription></ProductDescription>
//         </ProductDetailsContainer>
//     )
// }
