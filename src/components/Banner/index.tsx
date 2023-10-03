import { BannerContainer, BannerImage, BannerText } from "./styles";
import bannerImage from '../../../public/assets/bannerImage.png';

export default function Banner() {
    return (
        <BannerContainer>
            <BannerText>
                <h2>Aproveite 50% de promoção do conforto da sua casa.</h2>
                <p>Explore o universo dos games com a nossa incrível seleção de produtos para todos os jogadores apaixonados!</p>
            </BannerText>
            <BannerImage>
                <img src={bannerImage} alt="Imagem do banner" />
            </BannerImage>
        </BannerContainer>
    )
}