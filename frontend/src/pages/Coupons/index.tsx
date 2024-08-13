import { useState } from "react";
import { ArrowContainer, BackArrow, Container, CouponButtonText, CouponOptionPressable, CouponOptionText, CouponOptionUnderline, CouponsDisplayContainer, CouponsHeader, CouponsNavigationContainer, HeaderTitle, InsertCouponButton } from "./style";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Coupon from "../../components/Coupon";

export default function Coupons() {
    const navigation = useNavigation();

    const [isTodos, setIsTodos] = useState(true);
    const [isFrete, setIsFrete] = useState(false);
    const [isOFF, setIsOFF] = useState(false);

    const coupons = [
        { option:"OFF", title: "10% OFF", subtitle: "Compras acima de R$80", expirationText: "Válido até 18/09/23" },
        { option:"OFF", title: "40% OFF", subtitle: "Compras acima de R$100", expirationText: "Válido até 20/10/23" },
        { option:"Frete", title: "Frete Grátis", subtitle: "Compras acima de R$25", expirationText: "Válido até 18/09/23" },
    ];

    const handleToggle = (option: string) => {
        switch(option){
            case "Todos":
                setIsTodos(!isTodos);
                setIsFrete(false);
                setIsOFF(false);
            break;

            case "Frete":
                setIsTodos(false);
                setIsFrete(!isFrete);
                setIsOFF(false);
            break;

            case "OFF":
                setIsTodos(false);
                setIsFrete(false);
                setIsOFF(!isOFF);
            break;

            default:
        }
    };

    const isVisible = (option: string) => {
        if (isTodos) return true;

        switch(option){
            case "Frete":
                return isFrete;  

            case "OFF":
                return isOFF;

            default:
                return false;
        }
    }

    return (
        <Container>
                <ArrowContainer onPress={() => navigation.goBack()}>
                    <BackArrow source={require("../../assets/SetaEsquerda.svg")}></BackArrow>
                </ArrowContainer>
            <CouponsHeader>
                <HeaderTitle>Cupons</HeaderTitle>
            </CouponsHeader>

        <CouponsNavigationContainer>
            <CouponOptionPressable onPress={() => handleToggle("Todos")}>
                <CouponOptionText isSelected={isTodos && !isFrete && !isOFF}>Todos</CouponOptionText>
                <CouponOptionUnderline isSelected={isTodos && !isFrete && !isOFF} />
            </CouponOptionPressable>
            <CouponOptionPressable onPress={() => handleToggle("Frete")}>
                <CouponOptionText isSelected={!isTodos && isFrete && !isOFF}>Frete</CouponOptionText>
                <CouponOptionUnderline isSelected={!isTodos && isFrete && !isOFF} />
            </CouponOptionPressable>
            <CouponOptionPressable onPress={() => handleToggle("OFF")}>
                <CouponOptionText isSelected={!isTodos && !isFrete && isOFF}>% OFF</CouponOptionText>
                <CouponOptionUnderline isSelected={!isTodos && !isFrete && isOFF} />
            </CouponOptionPressable>
        </CouponsNavigationContainer>

        <InsertCouponButton>
            <CouponButtonText>Inserir Cupom</CouponButtonText>
        </InsertCouponButton>

        <CouponsDisplayContainer>
            {(coupons.map((coupon) => (
                <Coupon 
                    visible={isVisible(coupon.option)}
                    title={coupon.title}
                    subtitle={coupon.subtitle}
                    expirationText={coupon.expirationText}
                />
            )))}
        </CouponsDisplayContainer>

        </Container>
    );
}