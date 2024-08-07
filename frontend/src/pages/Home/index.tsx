import { View, Image } from "react-native";
import { Banner, BannerImage, SearchContainer, Search, Categories, Container, Linha, Lupa, OffersContainer, OffersSeta, OffersText, ProductsDisplay } from "./style";
import Header from "../../components/Header";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Product from "../../components/Product";

export default function Home(){
    return (
        <>
            <Container>
                <Header/>
                <Banner>
                    <BannerImage source={require("../../assets/banner/bannerImage1.png")}></BannerImage>
                    <BannerImage source={require("../../assets/banner/bannerImage2.png")}></BannerImage>
                </Banner>
                <Categories>
                    <Category index={1} title="Jogos Eletrônicos"/> 
                    <Category index={2} link="" title="Peças de Computadores"/> {/* adicionar link p/ tela de peças */}
                    <Category index={3} title="Acessórios Novos"/>
                    <Category index={4} title="Acessórios Semi-Novos"/>
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
                    <Product visible={true} index={1} title="The Legend of Zelda: Breath of the Wild (Nintendo Switch)" location="Rio de Janeiro" price="R$ 98.99"/>
                    <Product visible={true} index={2} title="COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09" location="Minas Gerais" price="R$ 25.98"/>
                    <Product visible={true} index={3} title="HEADSET GAMER MULTI WARRIOR " location="São Paulo" price="R$ 83.99"/>
                    <Product visible={true} index={4} title="FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053" location="Acre" price="R$ 31.98"/>
                </ProductsDisplay>
            </Container>
            <Footer/>
        </>
    );
}