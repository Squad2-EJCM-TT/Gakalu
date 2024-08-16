import styled from "styled-components/native";

export const Container = styled.View `
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: #f3f3f3;

`;

export const CabecalhoContainer = styled.View `
    width: 100%;
    height:80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px;
`;


export const SetaVoltar = styled.Pressable `
    
`;
export const SetaImg = styled.Image `
    width:30px;
    height:30px;
`;

export const CarrinhoImg = styled.Image `
    width:34px;
    height:36px;
`;

export const TituloCabecalho = styled.Text `
    
    font-size: 24px;
    font-weight: 700;
`;

export const BotaoCarrinho = styled.Pressable `
    position: relative;
    width: 40px;
    height: 43px;


`;

export const NumeroItensTexto = styled.Text `
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    font-family: '';
`;

export const NumeroItensContainer = styled.View `
    width:16px;
    height:16px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    position: absolute;
    top:0;
    right:0;
    z-index:2;    
    background-color: #0332fc;
`;

export const MeioCabecalho = styled.View `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const QuantItens = styled.Text `
    color: #8E9093;
    font-weight: 700;
    font-size: 16px;

`

export const ProductsDisplay = styled.View `
    flex-grow: 0;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    width: 100vw;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const InferiorContainer = styled.View `
    display: flex;
    flex-direction: column;
    border-radius: 15px, 15px, 0px, 0px;
    background-color: #ffffff;
    width: 100%;
    margin-top: auto;
    padding-bottom: 15px;
`

export const HorizontalContainer = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:15px 20px 5px 20px;
`
export const SubFrete = styled.Text `
    font-family: "";
    font-size: 16px;
    font-weight: 400;
    color: #00133B;

`

export const Valor = styled.Text `
    font-family: "";
    font-size: 16px;
    font-weight: 800;
    color: #686B76;
`

export const TotalTexto = styled.Text `
    font-family: "";
    font-size: 24px;
    font-weight: 700;
    color: #00133B;
`

export const ValorTotal = styled.Text `
    font-family: "";
    font-size: 32px;
    font-weight: 800;
    color: #0332FC;
`

export const BotaoContinuar = styled.Pressable `
    background-color: #0332FC;
    border-radius: 15px;
    align-items: center;
    border: 2px;
    border-color: #EBEBE9;
    padding: 16px 68px 16px 68px;
`

export const BotaoCupom = styled.Pressable `
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 12px;
`

export const BotaoTexto = styled.Text `
    font-family: "";
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
`

export const CupomTexto = styled.Text `
    font-family: "";
    font-size: 16px;
    font-weight: 500;
    color: #00133B;
`
export const CumpomIcone = styled.Image `
    width: 32px;
    height: 24px;
`


