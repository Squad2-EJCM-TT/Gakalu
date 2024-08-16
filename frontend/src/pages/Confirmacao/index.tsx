
import { CheckIcon, CompraEfetuada, Container, ContainerBotoes, ContainerCheck, ContainerLogo, LogoGaluka, PedidoRealizado, } from "./style";
import BotaoAzul from "../../components/botaoAzul";
import BotaoPreto from "../../components/BotaoPreto";

export default function Confirmacao () {
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
                <BotaoPreto onClick={null} texto={"Voltar ao Carrinho"}/>
                <BotaoAzul onClick={null} texto={"Continuar"}/>
            </ContainerBotoes>

        </Container>
    )
}