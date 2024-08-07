import styled from "styled-components/native";

interface iconProps {
    home?: boolean;
    cupom?: boolean;
    coracao?: boolean;
    carrinho?: boolean;
}

export const Container = styled.View`
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    position: sticky;
    bottom: 0;
`;

export const ButtonFooter = styled.Pressable`
`;

export const Icon = styled.Image<iconProps>`
    width: ${(props: iconProps) => props.home ? 35 : props.cupom ? 50 : props.coracao ? 38 : 40}px;
    height: ${(props: iconProps) => props.home ? 36 : props.cupom ? 34 : props.coracao ? 34 : 40}px;
`;