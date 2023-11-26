import ProductCard from "../../components/ProductCard";
// import productsData from "../../data/products.json";
import { HomeContainer, ProductsFeed } from "./styles";
import Banner from "../../components/Banner";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
interface products {
  id: string;
  title: string;
  description: string;
  price: number;
  quanity: number;
}

export default function Home() {
  //   const productsArray = productsData.products;
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
