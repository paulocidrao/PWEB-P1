import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';
import { HomeContainer, ProductsFeed } from './styles';
import Banner from '../../components/Banner';

export default function Home() {
    const productsArray = productsData.products;
    return (
        <HomeContainer>
            <Banner />

            <ProductsFeed>
                {productsArray.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={{
                            id: product.id,
                            title: product.nome,
                            description: product.descricao,
                            price: product.preco,
                            imageUrl: product.imageURL,
                        }}
                    />
                ))}
            </ProductsFeed>
        </HomeContainer>
    )
}