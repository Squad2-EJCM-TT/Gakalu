import { useState } from "react";
import BotaoAzul from "../../components/botaoAzul";
import Descricao from "../../components/Descricao";
import { BotaoCarrinho, CabecalhoContainer, Detalhes,SetaImg, NumeroItensContainer, NumeroItensTexto, SetaVoltar, TituloCabecalho, CarrinhoImg, ImagemContainer, ImagemProduto, BotaoCurtir, BotaoCurtirImagem, NomePrecoContainer, CategoriaProduto, NomeProduto, Preco, PrecoAvalContainer, Estrela, EstrelaContainer, PerfilLojaContainer, PerfilAvalContainer, FotoPerfil, NomePerfil, BotaoVerLoja, VerLojaTexto, EstrelaPerfil, EstrelaPerfilContainer } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function DetalhesJogos () {
const [Curtida, setCurtida] = useState (true) 
const navigation = useNavigation();

const [products, setProducts] = useState({ visible: true, index: 1, title: "The Legend of Zelda: Breath of the Wild (Nintendo Switch)", category: "Jogos", price: "R$ 98.99"});
const [vendedor, setVendedor] = useState({vendedor: "Lucas Santos"})
    return (
        <Detalhes> 
           <CabecalhoContainer>
            <SetaVoltar onPress={() => navigation.goBack()}>
              <SetaImg source={require("../../assets/SetaEsquerda.svg")}/>
            </SetaVoltar>
            <TituloCabecalho>Detalhes</TituloCabecalho>
            <BotaoCarrinho>
                <NumeroItensContainer>
                    <NumeroItensTexto>2</NumeroItensTexto>
                </NumeroItensContainer>
                <CarrinhoImg source={require("../../assets/CarrinhoIcon.svg")}/>
            </BotaoCarrinho>
           </CabecalhoContainer>

            <ImagemContainer>
                <ImagemProduto source={require("../../assets/ZeldaImage.svg")}/>
                <BotaoCurtir onPress={()=>setCurtida(!Curtida)}>
                    {Curtida ? 
                    (<BotaoCurtirImagem source={require("../../assets/CoracaoYes.svg")}/>):
                    (<BotaoCurtirImagem source={require("../../assets/CoracaoNot.svg")}/>)}
                </BotaoCurtir>
            </ImagemContainer>  

            <NomePrecoContainer>
                <CategoriaProduto>{products.category}</CategoriaProduto>
                <NomeProduto>{products.title}</NomeProduto>
                <PrecoAvalContainer>
                    <Preco>{products.price}</Preco>
                    <EstrelaContainer>
                        {Array(5).fill(<Estrela source={require("../../assets/Estrela.svg")}/>)} 
                    </EstrelaContainer>
                </PrecoAvalContainer>
            </NomePrecoContainer>    

            <PerfilLojaContainer>
                <PerfilAvalContainer>
                    <FotoPerfil source={require("../../assets/PerfilFoto.svg")}/>
                    <NomePerfil>{vendedor.vendedor}</NomePerfil>
                    <EstrelaPerfilContainer>
                        {Array(5).fill (<EstrelaPerfil source={require("../../assets/Estrela.svg")}/>)}
                    </EstrelaPerfilContainer>
                </PerfilAvalContainer>
                
                <BotaoVerLoja>
                    <VerLojaTexto>Ver Loja</VerLojaTexto>
                </BotaoVerLoja>
            </PerfilLojaContainer>      
            <Descricao/>
            <BotaoAzul onClick={null} texto={"+ Add ao Carinho"}/>
        </Detalhes>
    )
} 