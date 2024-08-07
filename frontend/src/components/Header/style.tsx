import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 86px;
    background-color: #f3f3f3;
    top: 0;
    position: fixed;
    z-index: 1;
`;

export const PointsContainer = styled.View`
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Points = styled.Image`
    width: 31px;
    height: 8px;
`;

export const Logo = styled.Image`
    width: 107px;
    height: 53px;
`;

export const UserPhoto = styled.Image`
    width: 55px;
    height: 55px;
`;
