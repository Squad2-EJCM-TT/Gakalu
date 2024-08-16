
import { CheckIcon, CompraEfetuada, Container, ContainerBotoes, ContainerCheck, ContainerLogo, LogoGaluka, PedidoRealizado, } from "./style";
import BotaoAzul from "../../components/botaoAzul";
import BotaoPreto from "../../components/BotaoPreto";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


export default function Confirmacao () {

    const navigation = useNavigation()
    return (
        <Container>
            <ContainerLogo>
                <LogoGaluka source={require('../../assets/logoGaluka.svg')}/>
            </ContainerLogo>
            <ContainerCheck>
                <CheckIcon source={require('../../assets/checkIcon.svg')}/>
                <PedidoRealizado>Seu pedido foi realizado</PedidoRealizado>
                <CompraEfetuada>Compra efetuada com sucesso!</CompraEfetuada>

            </ContainerCheck>
            <ContainerBotoes>
                <Pressable style = {{width: "100%", height: 70}} onPress={() => navigation.navigate("Carrinho" as never)}>
                    <BotaoPreto texto={"Voltar ao Carrinho"}/>
                </Pressable>
                <Pressable style = {{width: "100%"}} onPress={() => navigation.navigate("Home" as never)}>
                    <BotaoAzul  texto={"Continuar"}/>
                </Pressable>

                
            </ContainerBotoes>

        </Container>
    )
}