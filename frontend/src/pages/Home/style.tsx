import styled from "styled-components/native";

export const Container = styled.ScrollView`
    background-color: #F3F3F3;
    width: 100%;
    height: 100vh;
    flex: 1;
`;

export const Banner = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    margin-left: 18px;
    margin-top: 15px;
    flex-grow: 0;
    min-height: 198px;
`;

export const BannerImage = styled.Image`
    width: 350px;
    height: 198px;
    border-radius: 15px;
    margin-right: 10px;
`;

export const Categories = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 21px;
`;

export const SearchContainer = styled.View`
    width: 90%;
    height: 56px;
    background-color: #E5E5EA;
    border-radius: 15px;
    margin-left: 18px;
    margin-top: 20px;
`;

export const Lupa = styled.Image`
    width: 27px;
    height: 27px;
    position: absolute;
    margin-top: 15px;
    margin-left: 15px;
`;

export const Search = styled.TextInput`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding-left: 65px;
    font-weight: 200;
    font-size: 16px;
`;

export const OffersContainer = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px 10px 20px;
`;

export const OffersText = styled.Text`
    font-weight: 700;
    font-size: 24px;
`;

export const OffersSeta = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Linha = styled.View`
    width: 90%;
    height: 1px;
    background-color: #DDDFDE;
    margin-left: 20px;
`;

export const ProductsDisplay = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    margin: 15px 0 30px 18px;
    flex-grow: 0;
`;