import { Image, Text, View } from "react-native"
import {Container, Logo, TextTitulo} from './style'
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"

const QuemVc = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}/>
            <TextTitulo>Quem você quer ser?</TextTitulo>
            <Button content="Comprador" onClick={() => navigation.navigate("Register" as never)}/>
            <Button content="Vendedor" onClick={() => navigation.navigate("Register" as never)}/>
        </Container>
    )
}

export default QuemVc