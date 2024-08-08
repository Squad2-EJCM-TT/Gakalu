import { ButtonFooter, Container, Icon } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Footer(){
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonFooter onPress={() => navigation.navigate("Home" as never)}>
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