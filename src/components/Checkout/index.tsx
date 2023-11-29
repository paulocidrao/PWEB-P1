import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import ProductCartCard from "../ProductCartCard";
import {
  Cancelar,
  Concluir,
  Container,
  ContentContainer,
  Tittle,
  Total,
} from "./styles";

interface ICloseCheckout {
  showCheckOut: boolean;
  CloseCheckOut: () => void;
}

export const Checkout = ({ CloseCheckOut, showCheckOut }: ICloseCheckout) => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);
  return (
    <>
      {showCheckOut && (
        <Container>
          <Cancelar onClick={CloseCheckOut}>X</Cancelar>
          <Tittle>Checkout</Tittle>
          <ContentContainer>
            {cartItems.length > 0 ? (
              <>
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
              </>
            ) : (
              <p>Carrinho Vazio!</p>
            )}
          </ContentContainer>
          {cartItems.length > 0 && (
            <>
              <Concluir>Confirmar compra</Concluir>
              <Total>Total a pagar: {formatCurrency(totalPrice)}</Total>
            </>
          )}
        </Container>
      )}
    </>
  );
};
