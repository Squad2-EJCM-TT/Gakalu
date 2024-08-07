import { Image, Pressable, Text, View } from "react-native"
import {styles} from './style'
import Input from "../../components/Input"
import Button from "../../components/Button"
import LogoContainer from "../../components/LogoContainer"

const Login = () => {
    return (
        <View style = {styles.container}>
            <View>
                <Image style = {styles.logoGakalu} source={require('../../assets/logo.png')}/>
            </View>
            <View style = {styles.containerForm}>
                <Text style = {styles.tituloForm}>Login</Text>
                <Input placeholder="Nome"/>
                <Input placeholder="Senha"/>
                <Text style = {styles.textSenha}>Esqueci a senha</Text>
            </View>
            <Button content="Entrar"/>
            <LogoContainer/>
            <Text style = {styles.textConta}>
                Não tem conta? <Text style = {styles.textContaAzul}>Crie uma conta</Text>
            </Text>
        </View>
    

    )
}

export default Login