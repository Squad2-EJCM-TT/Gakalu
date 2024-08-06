import styled from "styled-components/native";

export const Container = styled.View`
    max-width: 185px;
    height: 241px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    margin-right: 5px;
    justify-content: space-around;
    align-items: center;
`;

export const ProductContainer = styled.Pressable`

`;

export const ProductPhoto = styled.Image`
    width: 120px;
    height: 120px;
`;

export const FavoritoContainer = styled.Pressable`
    position: absolute;
    top: 14px;
    right: 10px;
`;

export const FavoritoIcon = styled.Image`
    width: 26px;
    height: 23px;
`;

export const Stars = styled.Image`
    width: 107.3px;
    height: 20.96px;
    position: absolute;
    z-index: 1;
`;

export const ProductInfo = styled.View`
    margin-left: 10px;
`;


export const ProductTitle = styled.Text`
    font-weight: 700;
    font-size: 12px;
    color: #0A1744;
    text-align: left;
`;

export const LocationContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 3px;
`;

export const LocationIcon = styled.Image`
    width: 7.2px;
    height: 9px;
`;

export const LocationText = styled.Text`
    font-weight: 400;
    font-size: 12px;
    color: #6E6C90;
`;

export const Price = styled.Text`
    font-weight: 800;
    font-size: 16px;
    color: #0332FC;
`;