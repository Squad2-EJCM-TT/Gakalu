import { Image, View } from "react-native"
import {Container, Logo} from './style'

export default function Splash () {
    return (
        <Container>
            <Logo source={require('../../assets/logoGaluka.svg')}/>
        </Container>
    )
}
