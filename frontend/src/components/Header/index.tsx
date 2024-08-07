import { Pressable } from "react-native";
import { Container, Logo, Points, PointsContainer, UserPhoto } from "./style";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Container>
            <Pressable
                onPress={() => <Link to=""></Link>}> {/*MUDAR O LINK*/}
                <PointsContainer>
                    <Points source={require("../../assets/header/threeDots.png")}></Points>
                </PointsContainer>
            </Pressable>
            <Logo source={require("../../assets/header/logo.png")}></Logo>
            <Pressable
                onPress={() => <Link to=""></Link>}> {/*MUDAR O LINK*/}
                <UserPhoto source={require("../../assets/header/userPhoto.png")}></UserPhoto>
            </Pressable>
        </Container>
    );
}