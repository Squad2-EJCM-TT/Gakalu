import { Text, View } from "react-native"
import { ContainerInput, InputStyles} from "./style"

type PropsInputDescricao = {
    onChange: any;
    onBlur: any;
    value: any;
    valor: boolean;
}

const InputDescricao = (props: PropsInputDescricao) => {
    return (
        <ContainerInput>
            <InputStyles placeholder="Descrição" onChange={props.onChange} onBlur={props.onBlur} value = {props.value} multiline = {props.valor}></InputStyles>
        </ContainerInput>
    )
}

export default InputDescricao