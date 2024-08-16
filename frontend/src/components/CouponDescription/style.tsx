import styled from "styled-components/native";

interface ContainerProps{
    isVisible: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 422px;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: ${(props: ContainerProps) => (props.isVisible) ? "flex" : "none"};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: auto;
`;

export const DescriptionIcon = styled.Image`
    width: 68px;
    height: 51px;
    margin-top: 50px;
`;

export const DescriptionTitle = styled.Text`
    font-weight: 400;
    font-size: 48px;
    color: black;
`;

export const DescriptionSubtitle = styled.Text`
    font-weight: 300;
    font-size: 14px;
    color: black;
`;

export const RulesContainer = styled.View`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const RuleText = styled.Text`
    font-weight: 500;
    font-size: 20px;
    color: rgba(0,0,0,0.7);
`;
