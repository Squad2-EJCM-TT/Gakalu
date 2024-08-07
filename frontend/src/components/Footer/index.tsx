import { ButtonFooter, Container, Icon } from "./style";

export default function Footer(){
    return (
        <Container>
            <ButtonFooter>
                <Icon home source={require("../../assets/icons/home.png")}></Icon>
            </ButtonFooter>
            <ButtonFooter>
                <Icon cupom source={require("../../assets/icons/cupom.png")}></Icon>
            </ButtonFooter>
            <ButtonFooter>
                <Icon coracao source={require("../../assets/icons/coracaoVazio.png")}></Icon>
            </ButtonFooter>
            <ButtonFooter>
                <Icon carrinho source={require("../../assets/icons/carrinho.png")}></Icon>
            </ButtonFooter>
        </Container>
    );
}