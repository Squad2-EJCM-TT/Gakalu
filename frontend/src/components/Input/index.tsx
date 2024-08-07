import { TextInput, View } from "react-native"
import { ContainerInput, InputStyles} from "./style"

type PropsInput = {
    placeholder: string
}

const Input = (props: PropsInput) => {
    return (
        <ContainerInput>
            <InputStyles placeholder= {props.placeholder}> 
            </InputStyles>
        </ContainerInput>
    )
}

export default Input