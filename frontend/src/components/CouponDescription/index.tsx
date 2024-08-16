import { Text } from "react-native";
import { Container, DescriptionIcon, DescriptionSubtitle, DescriptionTitle, RulesContainer, RuleText } from "./style";

export default function CouponDescription({ visible, title, subtitle, expirationText }: { visible: boolean, title: string, subtitle: string, expirationText: string }){
    return(
        <Container isVisible={visible}>
            <DescriptionIcon source={require("../../assets/icons/cupomAzul.png")}></DescriptionIcon>
            <DescriptionTitle>{title}</DescriptionTitle>
            <DescriptionSubtitle>{expirationText}</DescriptionSubtitle>
            <RulesContainer>
                <Text style={{ fontWeight: 700, fontSize: 20, color: "black" }}>Regras</Text>
                <RuleText>· {subtitle}</RuleText>
            </RulesContainer>
        </Container>

    );
}