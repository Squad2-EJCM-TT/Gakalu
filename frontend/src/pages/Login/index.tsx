import { Image, Pressable, Text, View } from "react-native"
import {Container, ContainerForm, LogoGakalu, TituloForm, TextSenha, TextConta, TextContaAzul} from './style'
import Input from "../../components/Input"
import Button from "../../components/Button"
import LogoContainer from "../../components/LogoContainer"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import Splash from "../Splash.tsx"

interface LoginData {
    nome: string;
    senha: string;
}

const Login = () => {

    const navigation = useNavigation();
    const {control,handleSubmit, formState: {errors}} = useForm()
    const onSubmit: SubmitHandler<LoginData> = (data) => {
        if(!data.nome || !data.senha) {
            console.log("sem nome")
            return
        }
        console.log(data)
    }
    const [Carregando, setCarregando] = useState(true);
    useEffect (() => {
        const timer = setTimeout (()=> {
            setCarregando(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
        {Carregando && (<Splash/>)}
        <Container>
            <View>
                <LogoGakalu source={require('../../assets/logo.png')}/>
            </View>
            <ContainerForm>
                <TituloForm>Login</TituloForm>
                <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="Nome" onChange={onChange} onBlur={onBlur} value={value}/>
                     )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                 <Controller
                    control={control}
                    name="senha"
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder="Senha" onChange={onChange} onBlur={onBlur} value={value}/>
                )}/>
                <TextSenha>Esqueci a senha</TextSenha>
            </ContainerForm>
            <Button content="Entrar" onClick={handleSubmit(onSubmit)}/>
            <LogoContainer content="Ou Conecte Com" page="Login"/>
            <TextConta>
                Não tem conta? 
                <Pressable onPress={() => navigation.navigate("QuemVc" as never)}>
                    <TextContaAzul>Crie uma conta</TextContaAzul>
                </Pressable>
            </TextConta>
        </Container>
        </>

    )
}

export default Login