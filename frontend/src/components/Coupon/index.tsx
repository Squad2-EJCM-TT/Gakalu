import { useState } from "react";
import { Container, CouponIcon, ExpirationDate, ImageContainer, Subtitle, TextContainer, Title, UsarContainer, UsarText } from "./style";

export default function Coupon({ visible, title, subtitle, expirationText, description }: 
    {   visible: boolean, 
        title: string, 
        subtitle: string, 
        expirationText: string, 
        description: (state: { descriptionVisible: boolean, title: string, subtitle: string, expirationText: string }) => void}){
            
    const [couponDescription, setCouponDescription] = useState(false);

    const toggleDescription = () => {
        const newState = !couponDescription;
        setCouponDescription(newState);
        description({
            descriptionVisible: newState,
            title,
            subtitle,
            expirationText
        });
    }

    return(
        <Container isVisible={visible}>
            <ImageContainer onPress={() => toggleDescription()}>
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