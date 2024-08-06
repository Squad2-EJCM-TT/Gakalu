import { useState } from "react";
import { Container, FavoritoContainer, FavoritoIcon, LocationContainer, LocationIcon, LocationText, Price, ProductContainer, ProductInfo, ProductPhoto, ProductTitle, Stars } from "./style";

const productMap: { [key: number]: any } = {
    1: require("../../assets/products/zelda.png"),
    2: require("../../assets/products/cooler.png"),
    3: require("../../assets/products/headsetGamer.png"),
    4: require("../../assets/products/headphone.png"),
};

export default function Produto({ index, title, location, price }: {index: number, title: string, location: string, price: string}){
    const [favoritado, setFavoritado] = useState(false);

    const handleFavoriteToggle = () => {
        setFavoritado(!favoritado);
    };

    const productSource = productMap[index];

    return (
        <Container>
            <FavoritoContainer
                onPress={handleFavoriteToggle}>
                    {favoritado ? (
                        <FavoritoIcon source={require("../../assets/icons/coracaoCheio.png")}></FavoritoIcon>
                    ): (
                        <FavoritoIcon source={require("../../assets/icons/coracaoVazio.png")}></FavoritoIcon>
                    )}
            </FavoritoContainer>
                <Stars source={require("../../assets/products/cincoEstrelas.png")}></Stars>
                <ProductContainer>
                    <ProductPhoto source={productSource}></ProductPhoto>
                </ProductContainer>
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <LocationContainer>
                    <LocationIcon source={require("../../assets/icons/localizacao.png")}></LocationIcon>
                    <LocationText>{location}</LocationText>
                </LocationContainer>
                <Price>{price}</Price>
            </ProductInfo>
            




        </Container>
    );
}