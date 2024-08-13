import styled from "styled-components/native";
import { OptionPressable, OptionText, OptionUnderline, ProductsNavigationContainer } from "../Products/style";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const isSmallScreen = width < 390;

export const Container = styled.View`
    width: 100%;
    height: 100vh;
    background-color: #F3F3F3;
    overflow-x: hidden;
`;

export const CouponsHeader = styled.View`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ArrowContainer = styled.Pressable`
    z-index: 2;
`;

export const BackArrow = styled.Image`
    width: 31px;
    height: 30.21px;
    position: absolute;
    left: 7%;
    top: 37px;
`;

export const HeaderTitle = styled.Text`
    font-weight: 700;
    font-size: 24px;
    color: #00133B;
    position: absolute;
`;

export const CouponsNavigationContainer = styled(ProductsNavigationContainer)`
    justify-content: start;
    margin-left: 7%;
    gap: 43px;
`;

export const CouponOptionPressable = styled(OptionPressable)``;

export const CouponOptionText = styled(OptionText)`
    font-size: ${isSmallScreen ? '16px' : '24px'};
`;

export const CouponOptionUnderline = styled(OptionUnderline)``;

export const InsertCouponButton = styled.Pressable`
    width: 163px;
    height: 41px;
    border-radius: 15px;
    background-color: #0332FC;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 20px;
    margin-left: 7%;
`;

export const CouponButtonText = styled.Text`
    color: #FFFEFC;
    font-weight: 700;
    font-size: 20px;
`;

export const CouponsDisplayContainer = styled.ScrollView.attrs({
})`
    width: 100%;
    height: 100px;
    margin-top: 18px;
`;