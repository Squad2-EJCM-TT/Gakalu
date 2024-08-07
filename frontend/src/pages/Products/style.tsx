import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const isSmallScreen = width < 390;

interface textProps{
    isSelected?: boolean;
}

export const Container = styled.View`
    background-color: #F3F3F3;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    justify-content: start;
    align-items: center;
`;

export const ProductsTitle = styled.Text`
    font-weight: 700;
    font-size: 24px;
    margin-top: 90px;
`;

export const ProductsNavigationContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 27px;
`;

export const OptionPressable = styled.Pressable`
    
`;

export const OptionText = styled.Text<textProps>`
    font-weight: 400;
    font-size: ${isSmallScreen ? '12px' : '16px'};
    color: ${(props: textProps) => props.isSelected ? "#0332FC" : "#9DAADD"};
`;

export const OptionUnderline = styled.View<textProps>`
    width: 100%;
    height: 1px;
    background-color: ${(props: textProps) => props.isSelected ? "#0332FC" : "transparent"};
    margin-top: 20px;
`;

export const ProductsDisplayContainer = styled.View`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 17px;
    column-gap: ${isSmallScreen ? '5px' : '17px'};
    margin-top: 20px;
    margin-bottom: 100px;
`;