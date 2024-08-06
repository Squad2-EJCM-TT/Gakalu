import styled from "styled-components/native";

export const Container = styled.View`
    width: 87px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Rectangle = styled.Pressable`
    width: 100%;
    height: 87px;
    border-radius: 15px;
    background-color: #0332FC;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: #00A1FF;
    }
`;

export const Icon = styled.Image`
    width: 30%;
    height: 30%;
`;

export const Title = styled.Text`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
`;