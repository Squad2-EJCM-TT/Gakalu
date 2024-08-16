import { Pressable, View } from "react-native"
import {Container, ContainerForm, ContainerButton} from './style'
import Header2 from "../../components/Header2";
import Input from "../../components/Input"
import { useNavigation } from "@react-navigation/native";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Button from "../../components/Button";

interface EnderecoData {
    cpf: string;
    bairro: string;
    cidade: string;
    cep: string;
}

const Endereco = () => {

    const navigation = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm()
    const onSubmit: SubmitHandler<EnderecoData> = (data) => {
        if (!data.cpf || !data.bairro || !data.cidade || !data.cep) {
            console.log("sem nome")
            return
        }
        console.log(data)
        navigation.navigate("Confirmacao" as never)
    }

    return (
        <Container>
            <Header2 titulo="Endereço" subtitulo="1 itens"/>
            <ContainerForm>
                <Controller
                    control={control}
                    name="cpf"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="CPF" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="bairro"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="Bairro" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="cidade"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="Cidade" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="cep"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder="CEP" onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
            </ContainerForm>
            <Pressable>
                <ContainerButton><Button content="Finalizar pedido" onClick={handleSubmit(onSubmit)} /></ContainerButton>
            </Pressable>
                
            
        </Container>
    )
}

export default Endereco