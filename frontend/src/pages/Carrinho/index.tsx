import { Text } from "react-native";
import { BotaoCarrinho, CabecalhoContainer, CarrinhoImg, Container, MeioCabecalho, NumeroItensContainer, NumeroItensTexto, QuantItens, SetaImg, SetaVoltar, TituloCabecalho, ProductsDisplay, InferiorContainer, HorizontalContainer, SubFrete, Valor, TotalTexto, ValorTotal, BotaoCupom, CumpomIcone, CupomTexto, BotaoContinuar, BotaoTexto } from "./style";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";


export default function Carrinho () {
    const products = [
        { visible: true, index: 1, title: "The Legend of Zelda: Breath of the Wild (Nintendo Switch)", location: "Rio de Janeiro", price: "R$ 98.99" },
        { visible: true, index: 2, title: "COOLER DEEPCOOL PARA AMD CK-AM209, DP-ACAL-A09", location: "Minas Gerais", price: "R$ 25.98" },
        { visible: true, index: 3, title: "HEADSET GAMER MULTI WARRIOR", location: "São Paulo", price: "R$ 83.99" },
        { visible: true, index: 4, title: "FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053", location: "Acre", price: "R$ 31.98" },
    ];
    const navigation = useNavigation()
    return (
        <Container>
            <CabecalhoContainer>
                <SetaVoltar  onPress={() => navigation.goBack()}>
                <SetaImg source={require("../../assets/SetaEsquerda.svg")}/>
                </SetaVoltar>
                <MeioCabecalho>
                    <TituloCabecalho>Meu Carrinho</TituloCabecalho>
                    <QuantItens>1 itens</QuantItens>
                </MeioCabecalho>
                <BotaoCarrinho>
                    <NumeroItensContainer>
                        <NumeroItensTexto>2</NumeroItensTexto>
                    </NumeroItensContainer>
                    <CarrinhoImg source={require("../../assets/CarrinhoIcon.svg")}/>
                </BotaoCarrinho>
            </CabecalhoContainer>
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

            <InferiorContainer>
                    <HorizontalContainer>
                        <SubFrete>Sub Total</SubFrete>
                        <Valor>R$149.98</Valor>
                    </HorizontalContainer>
                    <HorizontalContainer>
                        <SubFrete>Frete</SubFrete>
                        <Valor>R$0</Valor>
                    </HorizontalContainer>
                    <HorizontalContainer>
                        <TotalTexto>Total</TotalTexto>
                        <ValorTotal>R$149.98</ValorTotal>
                    </HorizontalContainer>
                    <HorizontalContainer>
                        <BotaoCupom>
                            <CumpomIcone source={require("../../assets/icons/CupomIcone.svg")}/>
                            <CupomTexto>Usar Cupom</CupomTexto>
                        </BotaoCupom>
                        <BotaoContinuar onPress={() => navigation.navigate("Endereco" as never)}>
                            <BotaoTexto>Continuar</BotaoTexto>
                        </BotaoContinuar>
                    </HorizontalContainer>
            </InferiorContainer>
            
        </Container>

    )
}