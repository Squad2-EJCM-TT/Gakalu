import { ButtonFooter, Container, Icon } from "./style";
import { useNavigation } from "@react-navigation/native";

type Props = {
    userType: {
        vendedor: boolean;
    }
}

export default function Footer({ userType }: Props){
    const navigation = useNavigation();

    return (
        <Container>
            {
            (userType.vendedor) ? 
            <ButtonFooter onPress={() => navigation.navigate("SellerHome" as never)}>
                <Icon home source={require("../../assets/icons/home.png")}></Icon>
            </ButtonFooter>
            :   
            <ButtonFooter onPress={() => navigation.navigate("Home" as never)}>
                <Icon home source={require("../../assets/icons/home.png")}></Icon>
            </ButtonFooter>
            }
            <ButtonFooter onPress={() => navigation.navigate("Coupons" as never)}>
                <Icon cupom source={require("../../assets/icons/cupom.png")}></Icon>
            </ButtonFooter>
            {
            (userType.vendedor) ? 
            <></>
            :   
            <ButtonFooter>
                <Icon coracao source={require("../../assets/icons/coracaoVazio.png")}></Icon>
            </ButtonFooter>
            }
            
            <ButtonFooter>
                <Icon carrinho source={require("../../assets/icons/carrinho.png")}></Icon>
            </ButtonFooter>
        </Container>
    );
}