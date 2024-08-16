import styled from 'styled-components/native';

export const ButtonStyle = styled.Pressable.attrs({ButtonStyleContainer: {
  shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
}})`
  background-color: #0332FC;
  border-radius: 15px;
  height: 56px;
  max-width: fit-content;
  padding: 15px 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;