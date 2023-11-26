import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useSearch } from "../../hooks/useSearch";
import { HomeContainer, ProductsFeed } from "../Home/styles";
import { SearchNotFound } from "./styles";
import { api } from "../../lib/axios";

interface products {
  id: string;
  title: string;
  description: string;
  price: number;
  quanity: number;
  photo_url: string;
}
export default function Search() {
  const [data, setData] = useState<products[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setData(response.data);
      } catch (error) {
        console.log("Ocorreu um erro", error);
      }
    };
    fetchData();
  }, []);
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
                photo_url: product.photo_url,
              }}
            />
          ))}
        </ProductsFeed>
      )}
    </HomeContainer>
  );
}
