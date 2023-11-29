import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ProductCartCard from "../../components/ProductCartCard";
import { useCart } from "../../hooks/useCart";
import {
  CartContainer,
  ConfirmarPedido,
  PaymentInformation,
  ProductList,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";
import { Checkout } from "../../components/Checkout";

export default function UserCart() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
  const [openCheckoutModal, setOpenCheckoutModal] = useState<boolean>(false);

  const { cartItems, cleanCart } = useCart();
  console.log(cartItems);

  const totalPrice = cartItems.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  const paymentMethodsList = [
    { id: 1, name: "Cartão de Crédito / Débito" },
    { id: 2, name: "Paypal" },
    { id: 3, name: "Dinheiro na entrega" },
  ];

  const handleMethodChange = (methodId: number) => {
    setSelectedMethod(methodId);
  };

  const openCheckout = () => {
    setOpenCheckoutModal((prevCheckout: boolean) => !prevCheckout);
    console.log("openCheckout function called");
    console.log(openCheckoutModal);
  };

  return (
    <>
      {openCheckoutModal && (
        <Checkout
          CloseCheckOut={openCheckout}
          showCheckOut={openCheckoutModal}
        />
      )}

      {!openCheckoutModal && (
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
                      productID={item.id}
                      imageURL={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      price={formatCurrency(item.price * item.quantity)}
                      quantity={item.quantity}
                    />
                  ))}
                </ProductList>
              </div>

              <PaymentInformation>
                <div>
                  <h2>Detalhes de pagamento</h2>

                  <div className="paymentMethods">
                    <h3>Escolha o Método de Pagamento:</h3>
                    <ul>
                      {paymentMethodsList.map((method) => (
                        <li key={method.id}>
                          <div>
                            <input
                              type="radio"
                              id={`paymentMethod_${method.id}`}
                              name="paymentMethod"
                              value={method.id}
                              checked={selectedMethod === method.id}
                              onChange={() => handleMethodChange(method.id)}
                            />
                            <label htmlFor={`paymentMethod_${method.id}`}>
                              {method.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="confirmOrder">
                  <p>Total a pagar: {formatCurrency(totalPrice)}</p>

                  {/* <Button
                text="Confirmar pedido"
                border="corner"
                background="successColor"
                onClick={openCheckout}
              /> */}
                  <ConfirmarPedido onClick={openCheckout}>
                    Confirmar Pedido
                  </ConfirmarPedido>
                </div>
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
      )}
    </>
  );
}
