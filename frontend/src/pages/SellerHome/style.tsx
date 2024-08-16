import styled from "styled-components/native";
import { SearchContainer } from "../Home/style";
import { ProductsDisplayContainer } from "../Products/style";

export const Container = styled.View`
    background-color: #F3F3F3;
    width: 100%;
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const SellerSearchContainer = styled(SearchContainer)`
    margin-top: 100px;
    margin-left: 0;
`;

export const ProductsSectionContainer = styled.View`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const ProductsSectionTitle = styled.Text`
    font-weight: 700;
    font-size: 24px;
    color: #1C1C1E;
    margin-top: 17px;
    margin-bottom: 17px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: #DDDFDE;
`;

export const Circle = styled.Pressable`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #0332FC;
`;

export const PlusSign = styled.Text`
   font-size: 30px;
   font-weight: 300;
   color: #FFFFFF;
`;

export const SellerProductsDisplayContainer = styled(ProductsDisplayContainer)``;
