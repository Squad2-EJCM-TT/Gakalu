import styled from "styled-components/native";
import global from "../../../global";

export const Detalhes = styled.View `
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: #f3f3f3;
    padding: 0 20px;

`;

export const CabecalhoContainer = styled.View `
    width: 100%;
    height:80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    color: ${global.colors.AzulEscuro};
    font-size: 24px;
    font-weight: 700;
`;

export const BotaoCarrinho = styled.Pressable `
    position: relative;
    width: 40px;
    height: 43px;


`;

export const NumeroItensTexto = styled.Text `
    color: ${global.colors.Branco};
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
    background-color: ${global.colors.Azul} ;

    
`;

export const ImagemContainer = styled.View `
    position: relative;
    background-color: ${global.colors.Branco} ;
    border-radius: 15px;
    width: 388px;
    height: 266px;
    align-items: center;
    justify-content: center;

`
export const ImagemProduto = styled.Image `
    width: 388px;
    height: 266px;

`

export const BotaoCurtir = styled.Pressable `
    position: absolute;
    top: 10px;
    right: 10px;
`

export const BotaoCurtirImagem = styled.Image `
    width: 26px;
    height: 23px;
`

export const NomePrecoContainer = styled.View `
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    margin-top: 20px;
`

export const NomeProduto = styled.Text `
    color: ${global.colors.AzulEscuro};
    font-weight: 700;
    font-size: 32px;
    font-family: '';

`

export const CategoriaProduto = styled.Text `
    color: #7189DE;
    font-weight: 500;
    font-size: 16px;
    font-family: '';

`
export const PrecoAvalContainer = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Preco = styled.Text `
    font-family: '';
    font-weight: 800;
    font-size: 36px;
    color: #0332FC;
`   
export const EstrelaContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:8px;
`

export const Estrela = styled.Image `
    height: 20.96px;
    width: 19.39px;
    
`
export const PerfilAvalContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 8px;

`

export const PerfilLojaContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

`

export const NomePerfil = styled.Text `
    font-weight: 400;
    font-size: 16px;
    font-family: "";
`

export const FotoPerfil = styled.Image`
    width: 36px;
    height: 36px;
`
export const BotaoVerLoja = styled.Pressable `
`

export const VerLojaTexto = styled.Text `
    font-weight: 300;
    font-size: 14px;
    font-family: "";
`

export const EstrelaPerfilContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:4px;
`
export const EstrelaPerfil = styled.Image `
    width: 13px;
    height: 13px;
`