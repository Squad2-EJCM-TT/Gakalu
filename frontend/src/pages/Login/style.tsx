import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
  background-color: #F3F3F3;
`;

export const LogoGakalu = styled.Image`
  width: 210px;
  height: 84px;
`;

export const ContainerForm = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const TituloForm = styled.Text`
  font-size: 36px;
  font-weight: 400;
  color: #1C1C1E;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 15px;
`;

export const TextSenha = styled.Text`
  font-size: 16px;
  color: #0332FC;
  font-weight: 500;
  align-self: flex-end;
  margin-right: 34px;
  margin-bottom: 10px;
`;

export const TextConta = styled.Text`
  color: #1C1C1E;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  position: absolute;
  bottom: 35px;
`;


export const TextContaAzul = styled.Text`
  color: #0332FC;
  font-weight: 600;
  margin-left: 5px;
`;