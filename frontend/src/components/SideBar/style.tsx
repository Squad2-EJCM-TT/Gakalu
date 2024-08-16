import styled from "styled-components/native";

interface ContainerProps{
    isVisible: boolean;
}

interface IconProps{
    width: number;
    height: number;
}

export const Container = styled.View<ContainerProps>`
    background-color: #F2F2F7;
    display: ${(props: ContainerProps) => (props.isVisible ? "flex" : "none")};
    justify-content: start;
    align-items: center;
    width: 90%;
    height: 100vh;
    margin-top: 100px;
`;

export const Content = styled.View`
    width: 100%;
    gap: 30px;
    margin-left: 10%;
`;

export const OptionContainer = styled.Pressable`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
`;

export const OptionIcon = styled.Image<IconProps>`
    width: ${(props: IconProps) => (props.width)}px;
    height: ${(props: IconProps) => (props.height)}px;
`;

export const OptionText = styled.Text`
    font-weight: 700;
    font-size: 15px;
    color: #0332FC;
`;

export const Line = styled.View`
    width: 100%;
    height: 3px;
    background-color: #D9D9D9;
`;

export const DropdownContainer = styled.View<ContainerProps>`
    display: ${(props: ContainerProps) => (props.isVisible ? "flex" : "none")};
`;

export const ProductSubOptionContainer = styled(OptionContainer)`
    background-color: rgb(226, 226, 230);
    display: flex;
    height: 60px;
`;

export const ProductSubOptionText = styled(OptionText)`
    color: black;
    font-weight: 500;
    margin-left: 45px;
`;