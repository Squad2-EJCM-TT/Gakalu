import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { Lupa, Search } from "../Home/style";
import { Container, Line, ProductsSectionContainer, ProductsSectionTitle, SellerProductsDisplayContainer, SellerSearchContainer } from "./style";

export default function SellerHome(){
    const products = [
        { visible: true, index: 1, title: "The Legend of Zelda: Breath of the Wild (Nintendo Switch)", location: "Rio de Janeiro", price: "R$ 98.99" },
        { visible: true, index: 2, title: "COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09", location: "Minas Gerais", price: "R$ 25.98" },
        { visible: true, index: 3, title: "HEADSET GAMER MULTI WARRIOR", location: "São Paulo", price: "R$ 83.99" },
        { visible: true, index: 4, title: "FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053", location: "Acre", price: "R$ 31.98" },
    ];

    return(
        <>
        <Header vendedor={true}/>
        <Container>
            <SellerSearchContainer>
                <Lupa source={require("../../assets/icons/lupa.png")}></Lupa>
                <Search placeholder="Buscar..."></Search>
            </SellerSearchContainer>
            <ProductsSectionContainer>
                <ProductsSectionTitle>
                    Meus Produtos
                </ProductsSectionTitle>
                <Line></Line>
            </ProductsSectionContainer>
            <SellerProductsDisplayContainer>
                {products.map((product) => (
                    <Product 
                        visible={product.visible}
                        index={product.index}
                        title={product.title}
                        location={product.location}
                        price={product.price}
                    />
                ))}
            </SellerProductsDisplayContainer>
        </Container>
        <Footer userType={{ vendedor: true }}/>
        </>
    )
}