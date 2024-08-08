import { Image, Text, View } from "react-native"
import {Container, Logo, TextTitulo} from './style'
import Button from "../../components/Button"

const QuemVc = () => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}/>
            <TextTitulo>Quem você quer ser?</TextTitulo>
            <Button content="Comprador" onClick={null}/>
            <Button content="Vendedor" onClick={null}/>
        </Container>
    )
}

export default QuemVc