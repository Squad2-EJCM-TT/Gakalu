import {Container, ContainerForm, ContainerButton} from './style'
import { useNavigation } from "@react-navigation/native";
import { useForm, SubmitHandler, Controller } from "react-hook-form"

//componentes
import Input from '../../components/Input'
import InputDescricao from '../../components/InputDescricao'
import Button from '../../components/Button'
import Header2 from '../../components/Header2';


interface ProdutosData {
    nome: string;
    valor: any;
    cidade: string;
    categoria: string;
    descricao: string;
}

const NovosProdutos = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()
    const onSubmit: SubmitHandler<ProdutosData> = (data) => {
        if (!data.nome || !data.valor || !data.cidade || data.categoria) {
            console.log("sem nome")
            return
        }
        console.log(data)
    }

    return (
        <Container>
            <Header2 titulo='Novo Produto' subtitulo=' '/>
            <ContainerForm>
            <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder='Nome do produto' onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="valor"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder='Valor do produto' onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="cidade"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder='Cidade de origem' onChange={onChange} onBlur={onBlur} value={value} valor = {false}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
                <Controller
                    control={control}
                    name="descricao"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputDescricao  onChange={onChange} onBlur={onBlur} value={value} valor={true}/>
                    )}
                />{errors.newsletter && <h1>This field is required.</h1>}
            </ContainerForm>
            <ContainerButton>
            <Button content="Adicionar Foto" onClick={handleSubmit(onSubmit)} />
            </ContainerButton>
        </Container>
    )
}

export default NovosProdutos