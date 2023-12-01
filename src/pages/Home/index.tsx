import ProductCard from "../../components/ProductCard";
import { HomeContainer, ProductsFeed } from "./styles";
import Banner from "../../components/Banner";

import { useProducts } from '../../hooks/useProducts'

export default function Home() {
  const { data } = useProducts();
  return (
    <HomeContainer>
      <Banner />
      <ProductsFeed>
        {data ? (
          data.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                photo: product.photos[0].photo_url
              }}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ProductsFeed>
    </HomeContainer>
  );
}
