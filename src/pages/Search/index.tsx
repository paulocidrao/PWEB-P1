import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';
import { useSearch } from '../../hooks/useSearch';
import { HomeContainer, ProductsFeed } from '../Home/styles';
import { SearchNotFound } from './styles';

export default function Search() {
    const { searchString } = useSearch();

    const productsArray = productsData.products;
    const filteredProductsArray = productsArray.filter(product =>
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
                                imageUrl: product.imageUrl,
                            }}
                        />
                    ))}
                </ProductsFeed>
            )}
        </HomeContainer>
    )
}