import styled from 'styled-components/native';

// Styled Components
export const Container = styled.View`
  margin-top: 76px;
  width: 90%
`;

export const ContainerLogo = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #8d8d92;
`;

export const LogoImage = styled.Image`
  width: 63px;
  height: 63px;
  margin-right: 72px;
  margin-top: 23px;
  position: relative;
  left: 30px;
`;

export const TextContainer = styled.Text`
  color: #8d8d92;
  position: absolute;
  top: -15px;
  left: 30%;
  background-color: #F3F3F3;
  font-size: 20px;
  font-weight: 400;
  z-index: 2;
`;