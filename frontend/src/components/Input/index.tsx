import { TextInput, View } from "react-native"
import { ContainerInput, InputStyles} from "./style"

type PropsInput = {
    placeholder: string;
    onChange: any;
    onBlur: any;
    value: any;
    valor: boolean;

}

const Input = (props: PropsInput) => {
    return (
        <ContainerInput>
            <InputStyles placeholder= {props.placeholder} onChange={props.onChange} onBlur={props.onBlur} value = {props.value} multiline= {props.valor}> 
            </InputStyles>
        </ContainerInput>
    )
}

export default Input