import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get('window');

const isSmallScreen = width < 425;

interface containerProps{
    visible?: boolean;
}

export const Container = styled.View<containerProps>`
    width: ${isSmallScreen ? '324px' : '394px'};
    height: 116px;
    display: ${(props: containerProps) => (props.visible) ? "flex" : "none"};
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 15px;
    margin-bottom: 16px;
    margin-left: 7%;
`;

export const ImageContainer = styled.View`
    width: ${isSmallScreen ? '97px' : '127px'};;
    height: 100%;
    border-radius: 15px;
    background-color: #0332FC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CouponIcon = styled.Image`
    width: 68px;
    height: 51px;
`;

export const TextContainer = styled.View`
    flex: 1;
    display: flex;
    margin-left: 9px;
    justify-content: center;
    align-items: start;
`;

export const Title = styled.Text`
    font-weight: 500;
    font-size: 32px;
    color: #0F0F0F;
`;

export const Subtitle = styled.Text`
    font-weight: 300;
    font-size: 14px;
    color: #0F0F0F;
`;

export const ExpirationDate = styled.Text`
    font-weight: 300;
    font-size: 13px;
    color: rgba(0,0,0,0.4);
`;

export const UsarContainer = styled.Pressable`
    width: 32px;
    height: 18px;
    margin-top: 54px;
    margin-right: 13px;
`;

export const UsarText = styled.Text`
    font-weight: 600;
    font-size: 15px;
    color: #0332FC;
`;