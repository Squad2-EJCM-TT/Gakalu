import { Image, Pressable, View } from "react-native"
import { Container, ContainerForm, LogoGakalu, TituloForm,  IconeVoltar, ViewButton, LabelCheckbox, ViewCheckbox} from "./style"
import LogoContainer from "../../components/LogoContainer"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useState } from "react"
import { Controller, useForm, SubmitHandler } from "react-hook-form"
import CheckBox from '@react-native-community/checkbox'
import Checkbox from "expo-checkbox"
import { useNavigation, useRoute } from "@react-navigation/native"
import UserServices from "../../../services/UserServices"


interface FormData {
    nome: string;
    bairro: string;
    cidade: string;
    CEP: number;
    role: string;
    email: string;
    senha: string;
    checkbox: boolean;
  }


const Register = () => {
    
    const route = useRoute()
    const valor = route.params || {}
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm()
    const onSubmit: SubmitHandler<FormData> = (data) => {
        data.bairro = ""
        data.CEP = 0
        data.cidade = ""
        data.role = "valor?.cargo"
        const {checkbox, ...dataSemCheckbox} = data
        if(!data.nome || !data.email || !data.checkbox) {
            console.log("sem nome")
            return
        }
        UserServices.Register(dataSemCheckbox)
        navigation.navigate("Home" as never);
    }
    const [valueCheckbox, setValueCheckbox] = useState(false)

    return (
        <Container>
            <Pressable onPress={() => navigation.goBack()} style={{alignSelf: "flex-start", marginBottom: 10, marginLeft: 20 }}>
                <IconeVoltar source = {require('../../assets/iconeVoltar.svg')}/>
            </Pressable>
            <View>
                <LogoGakalu source={require('../../assets/logo.png')}/>
            </View>
            <ContainerForm>
                <TituloForm>Cadastro</TituloForm>
                <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="Nome" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                     )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="email"
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder="Email" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />  
                <Controller
                    control={control}
                    name="senha"
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder="Senha" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                )}/>

                <Controller
                    control={control}
                    name="checkbox"
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <ViewCheckbox>
                            <LabelCheckbox>
                                 <Checkbox value = {value} onValueChange={onChange} color={'#D9D9D9'} style = {{marginRight: 10, marginLeft:0}} />
                                 Eu li e concordo com os termos de uso
                            </LabelCheckbox>
                        </ViewCheckbox>
                )}/> 
            </ContainerForm>
            <ViewButton><Button content="Cadastrar" onClick={handleSubmit(onSubmit)}/></ViewButton>
           <LogoContainer content="Cadastrar Com"  page="Register"/>
        </Container>
    )
}

export default Register