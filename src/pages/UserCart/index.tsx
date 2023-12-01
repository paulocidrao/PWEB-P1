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
import { api } from "../../lib/axios";

export default function UserCart() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const { cartItems, cleanCart } = useCart();

  const totalPrice = cartItems?.reduce((acc, value) => {
    return acc + value.product.price * value.quantity;
  }, 0);

  const paymentMethodsList = [
    { id: 1, name: "Cartão de Crédito / Débito" },
    { id: 2, name: "Paypal" },
    { id: 3, name: "Dinheiro na entrega" },
  ];

  const handleMethodChange = (methodId: number) => {
    setSelectedMethod(methodId);
  };

  async function handleUserOrder() {
    const cart = await api.get("user/c8f1fcec-b3e0-4e31-9fd4-54d041128466");
    const userCart = (cart.data.Cart[0].id);
    console.log(userCart)
    try {
      const order = await api.post('/order', {
        userId: "c8f1fcec-b3e0-4e31-9fd4-54d041128466",
        cartId: userCart,
        paymentType: paymentMethodsList[selectedMethod! - 1].name,
        totalAmount: totalPrice
      })
      console.log(order)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CartContainer className={cartItems!.length > 0 ? "" : "emptyCart"}>
      {cartItems!.length > 0 ? (
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
              {cartItems!.map((item) => (
                <ProductCartCard
                  key={item.id}
                  productId={item.id}
                  product={{
                    id: item.product.id,
                    title: item.product.title,
                    description: item.product.description,
                    price: item.product.price,
                  }}
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
              <p>Total a pagar: {formatCurrency(totalPrice!)}</p>

              {/* <Button
                text="Confirmar pedido"
                border="corner"
                background="successColor"
                onClick={openCheckout}
              /> */}
              <ConfirmarPedido onClick={handleUserOrder}>
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
  )
}
