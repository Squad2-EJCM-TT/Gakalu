import { Image, Text, View } from "react-native"
import {Container, TextContainer, ContainerLogo, LogoImage} from './style'

//imagens

type PropsLogoContainer = {
    content: string;
    page: string;
}

const LogoContainer = (props: PropsLogoContainer) => {
    return (
            <Container>
                <TextContainer page={props.page}>{props.content}</TextContainer>
                <ContainerLogo>
                    <LogoImage source={require('../../assets/facebooklogo.svg')}></LogoImage>
                    <LogoImage source={require('../../assets/gmaillogo.svg')}></LogoImage>
                </ContainerLogo>
            </Container>
        
    )
}

export default LogoContainer