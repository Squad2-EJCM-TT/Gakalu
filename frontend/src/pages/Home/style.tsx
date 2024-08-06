import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #F3F3F3;
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const Banner = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    margin-left: 18px;
    margin-top: 15px;
    flex-grow: 0;
`;

export const BannerImage = styled.Image`
    width: 350px;
    height: 198px;
    border-radius: 15px;
    margin-right: 10px;
`;

export const Categorias = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9px;
    margin-top: 21px;
`;

export const BuscaContainer = styled.View`
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

export const Buscar = styled.TextInput`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding-left: 65px;
    font-weight: 200;
    font-size: 16px;
`;

export const OfertasContainer = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px 10px 20px;
`;

export const OfertasText = styled.Text`
    font-weight: 700;
    font-size: 24px;
`;

export const OfertasSeta = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Linha = styled.View`
    width: 90%;
    height: 1px;
    background-color: #DDDFDE;
    margin-left: 20px;
`;

export const ProdutosDisplay = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    margin-left: 18px;
    margin-top: 15px;
    flex-grow: 0;
`;