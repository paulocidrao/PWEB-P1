import ProductCard from "../../components/ProductCard";
import { useSearch } from "../../hooks/useSearch";
import { HomeContainer, ProductsFeed } from "../Home/styles";
import { SearchNotFound } from "./styles";
import { useProducts } from "../../hooks/useProducts";

export default function Search() {
  const { data } = useProducts();
  const { searchString } = useSearch();

  const productsArray = data || [];
  const filteredProductsArray = productsArray.filter((product) =>
    product.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <HomeContainer>
      {filteredProductsArray.length === 0 ? (
        <SearchNotFound>
          <h1>Nenhum produto encontrado.</h1>
        </SearchNotFound>
      ) : (
        <ProductsFeed>
          {filteredProductsArray.map((product) => (
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
          ))}
        </ProductsFeed>
      )}
    </HomeContainer>
  );
}
