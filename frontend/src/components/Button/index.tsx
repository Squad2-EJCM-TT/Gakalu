import { Pressable, Text, View } from "react-native"
import { ButtonStyle, TextButton } from "./style"


type PropsButton = {
    content: string
}

const Button = (props: PropsButton) => {
    return (
        <ButtonStyle>
            <TextButton>
                {props.content}
            </TextButton>
        </ButtonStyle>
    )
}

export default Button 