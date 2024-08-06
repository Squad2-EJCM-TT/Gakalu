import { Pressable } from "react-native";
import { Container, Logo, Pontinhos, PontinhosContainer, UserPhoto } from "./style";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Container>
            <Pressable
                onPress={() => <Link to=""></Link>}> {/*MUDAR O LINK*/}
                <PontinhosContainer>
                    <Pontinhos source={require("../../assets/header/threeDots.png")}></Pontinhos>
                </PontinhosContainer>
            </Pressable>
            <Logo source={require("../../assets/header/logo.png")}></Logo>
            <Pressable
                onPress={() => <Link to=""></Link>}> {/*MUDAR O LINK*/}
                <UserPhoto source={require("../../assets/header/userPhoto.png")}></UserPhoto>
            </Pressable>
        </Container>
    );
}