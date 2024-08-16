import styled from "styled-components/native";

interface ContainerProps{
    visible: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 172px;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: ${(props: ContainerProps) => (props.visible) ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HorizontalLine = styled.View`
    width: 124px;
    height: 4px;
    background-color: #D9D9D9;
    bottom: 40px;
`;

export const InsertCouponContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const InsertCouponInput = styled.TextInput`
    width: 262px;
    height: 55px;
    background-color: #E5E5EA;
    border: 0;
    border-radius: 15px;
    color: black;
    font-weight: 200;
    font-size: 16px;
    text-indent: 21px;
`;

export const InsertCouponButton = styled.Pressable`
    width: 127px;
    height: 55px;
    background-color: #0332FC;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InsertCouponButtonText = styled.Text`
    color: white;
    font-weight: 200;
    font-size: 16px;
`;