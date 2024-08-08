import { useState } from "react";
import { Container, ContainerDescricao, ContainerDivider, ContainerDividerFicha, ContainerDividerMenor, ContainerHorizontal, ContainerTexto, ContainerTextoMaior, ContainerVertical, TextoDescricao, Titulo, TituloSelecionado } from "./style";
import { View } from "react-native";


export default function Descricao () {
    
    const [Opcao, setOpcao] = useState (true)
    
    return (
        <Container>
            <ContainerVertical>
            <ContainerHorizontal>
                <ContainerTexto onPress={() => setOpcao (true)}>
                    <Titulo style={[Opcao && {color: "#00133b"} ]}>Descrição</Titulo>
                </ContainerTexto>
                <ContainerTextoMaior onPress={() => setOpcao (false)}>
                    <Titulo style={[!Opcao &&{color: "#00133b"}]}>Ficha Técnica</Titulo>
                </ContainerTextoMaior>
                </ContainerHorizontal>
                <ContainerDivider> 
                    {Opcao && <ContainerDividerMenor/>}
                    {!Opcao && <><View style={{height:2,width:90}}/><ContainerDividerFicha/></>}
                </ContainerDivider>
                </ContainerVertical>
            {Opcao === true ? (  <ContainerDescricao>
               <TextoDescricao>Lorem ipsum dolor sit amet. Et necessitatibus expedita qui dolorem ratione ut deserunt aspernatur et repellat ducimus! Et molestiae voluptas hic iusto voluptatem est commodi laboriosam sed facilis autem ut laboriosam quae.</TextoDescricao> 
            </ContainerDescricao>) : (<ContainerDescricao>
               <TextoDescricao>Código: AF252XT Modelo: YJX-102 Cores: Preto, Cinza, Branco Tamanho: 15x20 cm Fabricante: Lorem ipsum.</TextoDescricao> 
            </ContainerDescricao>
        )}
      </Container>      
    )
} 