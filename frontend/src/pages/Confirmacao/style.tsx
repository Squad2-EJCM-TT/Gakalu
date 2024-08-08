import styled from "styled-components/native"

export const Container = styled.View `
    width: 100%;
    flex: 1;
    background-color: #f3f3f3;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;

`

export const LogoGaluka = styled.Image `
    width: 107px;
    height: 51px;    

`
export const ContainerLogo = styled.View `
    align-items: center;
    margin-top: 35px;
 
 `
export const CheckIcon = styled.Image `
    width: 50vw;
    height: 50vw;
    margin-bottom: 17px;    

`

export const ContainerCheck = styled.View `
    align-items: center;
   
`

export const PedidoRealizado = styled.Text `
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color:#00133B;

`

export const CompraEfetuada = styled.Text `
    font-size: 16px;
    color: #8E9093;
    font-weight: 700;
    text-align:center;    

`

export const ContainerBotoes = styled.View `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 80px;

`