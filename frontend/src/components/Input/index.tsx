import { TextInput, View } from "react-native"
import { styles } from "./style"

type PropsInput = {
    placeholder: string
}

const Input = (props: PropsInput) => {
    return (
        <View style = {styles.containerInput}>
            <TextInput style = {styles.inputStyles} placeholder= {props.placeholder}> 
            </TextInput>
        </View>
    )
}

export default Input