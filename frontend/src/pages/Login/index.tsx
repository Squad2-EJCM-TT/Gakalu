import { Image, Pressable, Text, View } from "react-native"
import {Container, ContainerForm, LogoGakalu, TituloForm, TextSenha, TextConta, TextContaAzul} from './style'
import Input from "../../components/Input"
import Button from "../../components/Button"
import LogoContainer from "../../components/LogoContainer"

const Login = () => {
    return (
        <Container>
            <View>
                <LogoGakalu source={require('../../assets/logo.png')}/>
            </View>
            <ContainerForm>
                <TituloForm>Login</TituloForm>
                <Input placeholder="Nome"/>
                <Input placeholder="Senha"/>
                <TextSenha>Esqueci a senha</TextSenha>
            </ContainerForm>
            <Button content="Entrar"/>
            <LogoContainer/>
            <TextConta>
                Não tem conta? <TextContaAzul>Crie uma conta</TextContaAzul>
            </TextConta>
        </Container>
    

    )
}

export default Login