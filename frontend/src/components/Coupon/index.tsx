import { Pressable } from "react-native";
import { Container, CouponIcon, ExpirationDate, ImageContainer, Subtitle, TextContainer, Title, UsarContainer, UsarText } from "./style";

export default function Coupon({ visible, title, subtitle, expirationText }: {visible: boolean, title: string, subtitle: string, expirationText: string}){
    return(
        <Container visible={visible}>
            <ImageContainer>
                <CouponIcon source={require("../../assets/icons/cupomBranco.png")}></CouponIcon>
            </ImageContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <ExpirationDate>{expirationText}</ExpirationDate>
            </TextContainer>
            <UsarContainer>
                <UsarText>Usar</UsarText>
            </UsarContainer>
        </Container>
    );
}