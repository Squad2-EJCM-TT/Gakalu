import styled from "styled-components/native"

export const Container = styled.View `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 20px;
`
export const ContainerHorizontal = styled.View `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

`
export const ContainerVertical = styled.View `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

`

export const ContainerTexto = styled.Pressable `
    align-items: left;

`
export const ContainerTextoMaior = styled.Pressable `
    align-items: left;
    width: 385px;

`

export const ContainerDivider = styled.View `
    width: 100%;
    height: 2px;
    background-color: #B9D5F6;
    border-radius: 14px;
    display: flex;
    flex-direction: row;

`

export const ContainerDividerMenor = styled.View `
    width: 86px;
    height: 2px;
    background-color: #0332fc;
    border-radius: 14px;
    opacity: 0.8;
`
export const ContainerDividerFicha = styled.View `
    width: 120px;
    height: 2px;
    background-color: #0332fc;
    border-radius: 14px;
    opacity: 0.8;
`
export const TituloSelecionado = styled.Text `
    font-family: "";
    font-weight: 600;
    font-size: 16px;
    color: #00133B;
    margin-right: 10px;

`

export const Titulo = styled.Text `
    font-family: "";
    font-weight: 600;
    font-size: 16px;
    color: #B9D5F6;
    margin-right: 20px;


`

export const TextoDescricao = styled.Text `
    font-family: "";
    font-weight: 400;
    font-size: 16px;
    color: #1C1C1E;


`

export const ContainerDescricao = styled.View `
    width: 80vw;
    height: 35vw;

`


