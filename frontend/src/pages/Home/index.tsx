import { View, Image } from "react-native";
import { Banner, BannerImage, SearchContainer, Search, Categories, Container, Linha, Lupa, OffersContainer, OffersSeta, OffersText, ProductsDisplay } from "./style";
import Header from "../../components/Header";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Product from "../../components/Product";

export default function Home(){

    const categories = [
        { index: 1, title: "Jogos Eletrônicos" },
        { index: 2, link: "Products", title: "Peças de Computadores" },
        { index: 3, title: "Acessórios Novos" },
        { index: 4, title: "Acessórios Semi-Novos" },
    ];

    const products = [
        { visible: true, index: 1, title: "The Legend of Zelda: Breath of the Wild (Nintendo Switch)", location: "Rio de Janeiro", price: "R$ 98.99" },
        { visible: true, index: 2, title: "COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09", location: "Minas Gerais", price: "R$ 25.98" },
        { visible: true, index: 3, title: "HEADSET GAMER MULTI WARRIOR", location: "São Paulo", price: "R$ 83.99" },
        { visible: true, index: 4, title: "FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053", location: "Acre", price: "R$ 31.98" },
    ];

    return (
        <>
            <Header/>
            <Container>
                <Banner>
                    <BannerImage source={require("../../assets/banner/bannerImage1.png")}></BannerImage>
                    <BannerImage source={require("../../assets/banner/bannerImage2.png")}></BannerImage>
                </Banner>
                <Categories>
                    {categories.map((category) => (
                        <Category
                            index={category.index}
                            link={category.link}
                            title={category.title}/>
                    ))}
                </Categories>
                <SearchContainer>
                    <Lupa source={require("../../assets/icons/lupa.png")}></Lupa>
                    <Search placeholder="Buscar..."></Search>
                </SearchContainer>
                <OffersContainer>
                    <OffersText>Ofertas</OffersText>
                    <OffersSeta source={require("../../assets/icons/setaDireita.png")}></OffersSeta>
                </OffersContainer>
                <Linha></Linha>
                <ProductsDisplay>
                    {products.map((product) => (
                        <Product 
                            visible={product.visible}
                            index={product.index}
                            title={product.title}
                            location={product.location}
                            price={product.price}
                        />
                    ))}
                </ProductsDisplay>
            </Container>
            <Footer/>
        </>
    );
}