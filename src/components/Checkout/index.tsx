import {
  Cancelar,
  Concluir,
  Container,
  ProductCartInfo,
  Tittle,
} from "./styles";

interface ProductCartCardProps {
  imageURL: string;
  title: string;
  description: string;
}

export const Checkout = ({
  imageURL,
  title,
  description,
}: ProductCartCardProps) => {
  return (
    <>
      <Container>
        <Cancelar>X</Cancelar>
        <Tittle>Checkout</Tittle>
        <ProductCartInfo>
          <div className="productImage">
            <img src={`/assets/${imageURL}`} alt={title} />
          </div>

          <div className="titleDescription">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </ProductCartInfo>
        <Concluir>Confirmar compra</Concluir>
      </Container>
    </>
  );
};
