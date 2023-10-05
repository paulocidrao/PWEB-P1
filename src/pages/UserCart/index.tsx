import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ProductCartCard from "../../components/ProductCartCard";
import { useCart } from "../../hooks/useCart";
import { CartContainer, PaymentInformation, ProductList } from "./styles";

export default function UserCart() {
    const { cartItems, cleanCart } = useCart();
    console.log(cartItems)

    const totalPrice = cartItems.reduce((acc, value) => {
        return acc + value.price;
    }, 0)

    return (
        <CartContainer className={cartItems.length > 0 ? "" : "emptyCart"}>
            {cartItems.length > 0 ? (
                <>
                    <div>
                        <ProductList>
                            <header>
                                <h2>Seus produtos</h2>
                                <Button
                                    text="Limpar carrinho"
                                    background="none"
                                    border="full-rounded"
                                    handleFunction={cleanCart}
                                />
                            </header>
                            {cartItems.map((item) => (
                                <ProductCartCard
                                    key={item.id}
                                    imageURL={item.imageUrl}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            ))}
                        </ProductList>
                    </div>

                    <PaymentInformation>
                        <h2>Pagamento</h2>

                        <h3>Total a pagar: R$ {totalPrice}</h3>
                    </PaymentInformation>
                </>
            ) : (
                <div className="emptyCartDescription">
                    <h2>Seu carrinho está vazio.</h2>
                    <Link to="/">
                        <Button
                            text="Voltar às compras"
                            background="primaryColor"
                            border="corner"
                        />
                    </Link>
                </div>
            )}
        </CartContainer>
    )
}