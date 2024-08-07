import { Pressable, Text, View } from "react-native"
import { styles } from "./style"


type PropsButton = {
    content: string
}

const Button = (props: PropsButton) => {
    return (
        <Pressable style = {styles.ButtonStyle}>
            <Text style = {styles.textButton}>
                {props.content}
            </Text>
        </Pressable>
    )
}

export default Button 