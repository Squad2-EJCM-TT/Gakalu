import { useState } from "react";
import BotaoAzul from "../../components/botaoAzul";
import Descricao from "../../components/Descricao";
import { BotaoCarrinho, CabecalhoContainer, Detalhes,SetaImg, NumeroItensContainer, NumeroItensTexto, SetaVoltar, TituloCabecalho, CarrinhoImg, ImagemContainer, ImagemProduto, BotaoCurtir, BotaoCurtirImagem, NomePrecoContainer, CategoriaProduto, NomeProduto, Preco, PrecoAvalContainer, Estrela, EstrelaContainer, PerfilLojaContainer, PerfilAvalContainer, FotoPerfil, NomePerfil, BotaoVerLoja, VerLojaTexto, EstrelaPerfil, EstrelaPerfilContainer } from "./style";
import { View, Text, Image, Pressable } from 'react-native';

export default function DetalhesJogos () {
const [Curtida, setCurtida] = useState (true) 
    return (
        <Detalhes> 
           <CabecalhoContainer>
            <SetaVoltar>
              <SetaImg source={require("../../assets/SetaEsquerda.svg")}/>
            </SetaVoltar>
            <TituloCabecalho>Titulo</TituloCabecalho>
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
                <CategoriaProduto>Jogos</CategoriaProduto>
                <NomeProduto>The Legend of Zelda: Breath of the Wild Nintendo Switch</NomeProduto>
                <PrecoAvalContainer>
                    <Preco>R$ 98,99</Preco>
                    <EstrelaContainer>
                        <Estrela source={require("../../assets/Estrela.svg")}/>
                        <Estrela source={require("../../assets/Estrela.svg")}/>
                        <Estrela source={require("../../assets/Estrela.svg")}/>
                        <Estrela source={require("../../assets/Estrela.svg")}/>
                        <Estrela source={require("../../assets/Estrela.svg")}/>
                    </EstrelaContainer>
                </PrecoAvalContainer>
            </NomePrecoContainer>    

            <PerfilLojaContainer>
                <PerfilAvalContainer>
                    <FotoPerfil source={require("../../assets/PerfilFoto.svg")}/>
                    <NomePerfil>Lucas Santos</NomePerfil>
                    <EstrelaPerfilContainer>
                        <EstrelaPerfil source={require("../../assets/Estrela.svg")}/>
                        <EstrelaPerfil source={require("../../assets/Estrela.svg")}/>
                        <EstrelaPerfil source={require("../../assets/Estrela.svg")}/>
                        <EstrelaPerfil source={require("../../assets/Estrela.svg")}/>
                        <EstrelaPerfil source={require("../../assets/Estrela.svg")}/>
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