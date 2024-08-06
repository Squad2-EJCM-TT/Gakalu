import { BotaoFooter, Container, Icon } from "./style";

export default function Footer(){
    return (
        <Container>
            <BotaoFooter>
                <Icon home source={require("../../assets/icons/home.png")}></Icon>
            </BotaoFooter>
            <BotaoFooter>
                <Icon cupom source={require("../../assets/icons/cupom.png")}></Icon>
            </BotaoFooter>
            <BotaoFooter>
                <Icon coracao source={require("../../assets/icons/coracaoVazio.png")}></Icon>
            </BotaoFooter>
            <BotaoFooter>
                <Icon carrinho source={require("../../assets/icons/carrinho.png")}></Icon>
            </BotaoFooter>
        </Container>
    );
}