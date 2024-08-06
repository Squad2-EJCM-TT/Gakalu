import { View, Image } from "react-native";
import { Banner, BannerImage, BuscaContainer, Buscar, Categorias, Container, Linha, Lupa, OfertasContainer, OfertasSeta, OfertasText, ProdutosDisplay } from "./style";
import Header from "../../components/Header";
import Categoria from "../../components/Categoria";
import Footer from "../../components/Footer";
import Produto from "../../components/Produto";

export default function Home(){
    return (
        <Container>
            <Header/>
            <Banner>
                <BannerImage source={require("../../assets/banner/bannerImage1.png")}></BannerImage>
                <BannerImage source={require("../../assets/banner/bannerImage2.png")}></BannerImage>
            </Banner>
            <Categorias>
                <Categoria index={1} title="Jogos Eletrônicos"/> 
                <Categoria index={2} link="" title="Peças de Computadores"/> {/* adicionar link p/ tela de peças */}
                <Categoria index={3} title="Acessórios Novos"/>
                <Categoria index={4} title="Acessórios Semi-Novos"/>
            </Categorias>
            <BuscaContainer>
                <Lupa source={require("../../assets/icons/lupa.png")}></Lupa>
                <Buscar placeholder="Buscar..."></Buscar>
            </BuscaContainer>
            <OfertasContainer>
                <OfertasText>Ofertas</OfertasText>
                <OfertasSeta source={require("../../assets/icons/setaDireita.png")}></OfertasSeta>
            </OfertasContainer>
            <Linha></Linha>
            <ProdutosDisplay>
                <Produto index={1} title="The Legend of Zelda: Breath of the Wild (Nintendo Switch)" location="Rio de Janeiro" price="R$ 98.99"></Produto>
                <Produto index={2} title="COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09" location="Minas Gerais" price="R$ 25.98"></Produto>
                <Produto index={3} title="HEADSET GAMER MULTI WARRIOR " location="São Paulo" price="R$ 83.99"></Produto>
                <Produto index={4} title="FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053" location="Acre" price="R$ 31.98"></Produto>
            </ProdutosDisplay>

            <Footer/>
        </Container>
    );
}