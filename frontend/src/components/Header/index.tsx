import { Pressable } from "react-native";
import { Container, Logo, Points, PointsContainer, UserPhoto } from "./style";
import { useState } from "react";
import SideBar from "../SideBar";

export default function Header({ vendedor }: { vendedor: boolean }) {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    return (
        <>
            <Container>
                <Pressable onPress={() => setSideBarVisible(!sideBarVisible)}>
                    <PointsContainer>
                        <Points source={require("../../assets/header/threeDots.png")} />
                    </PointsContainer>
                </Pressable>
                <Logo source={require("../../assets/header/logo.png")} />
                <Pressable>
                    <UserPhoto source={require("../../assets/header/userPhoto.png")} />
                </Pressable>
            </Container>
            <SideBar visible={sideBarVisible} vendedor={vendedor} setSideBarVisible={setSideBarVisible} />
        </>
    );
}
