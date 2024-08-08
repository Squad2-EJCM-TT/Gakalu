import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const isSmallScreen = width < 390;

interface iconProps{
    index?: number;
}

export const Container = styled.View`
    width: 87px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Rectangle = styled.Pressable`
    width: ${isSmallScreen ? '67px' : '100%'};
    height: ${isSmallScreen ? '67px' : '87px'};
    border-radius: 15px;
    background-color: #0332FC;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: #00A1FF;
    }
`;

export const Icon = styled.Image<iconProps>`
    width: ${(props: iconProps) => (props.index == 1) ? 49 : (props.index == 2) ? 47 : (props.index == 3) ? 28 : 50}px;
    height: ${(props: iconProps) => (props.index == 1) ? 36 : (props.index == 2) ? 47 : (props.index == 3) ? 40 : 40}px;
`;

export const Title = styled.Text`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
`;