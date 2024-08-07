import { Image, Text, View } from "react-native"
import {Container, TextContainer, ContainerLogo, LogoImage} from './style'

//imagens



const LogoContainer = () => {
    return (
            <Container>
                <TextContainer>Ou Conecte Com</TextContainer>
                <ContainerLogo>
                    <LogoImage source={require('../../assets/gmaillogo.svg')}></LogoImage>
                    <LogoImage source={require('../../assets/facebooklogo.svg')}></LogoImage>
                </ContainerLogo>
            </Container>
        
    )
}

export default LogoContainer