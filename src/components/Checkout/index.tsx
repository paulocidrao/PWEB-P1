import {
  Cancelar,
  Concluir,
  Container,
  // ProductCartInfo,
  Tittle,
} from "./styles";

interface ProductCartCardProps {
  imageURL: string;
  title: string;
  description: string;
  showCheckOut: boolean;
  CloseCheckout: () => void;
}
export const Checkout = ({
  cartItems,
  showCheckOut,
  CloseCheckout,
}: {
  cartItems: ProductCartCardProps[];
  showCheckOut: boolean;
  CloseCheckout: () => void;
}) => {
  return (
    <>
      {showCheckOut && (
        <Container>
          <Cancelar onClick={CloseCheckout}>X</Cancelar>
          <Tittle>Checkout</Tittle>
          // Checkout.jsx // ...
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>Image URL: {item.imageURL}</p>
              <p>Title: {item.title}</p>
              <p>Description: {item.description}</p>
              {/* Adicione mais propriedades conforme necessário */}
            </div>
          ))}
          // ...
          {/* <ProductCartInfo>
            <div className="productImage">
              <img src={`/assets/${imageURL}`} alt={title} />
            </div>

            <div className="titleDescription">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </ProductCartInfo> */}
          <Concluir>Confirmar compra</Concluir>
        </Container>
      )}
    </>
  );
};
