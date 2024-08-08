import { Pressable, Text, View } from "react-native"
import { ButtonStyle, TextButton } from "./style"


type PropsButton = {
    content: string;
    onClick: any;
}

const Button = (props: PropsButton) => {
    return (
        <ButtonStyle onPress={props.onClick}>
            <TextButton>
                {props.content}
            </TextButton>
        </ButtonStyle>
    )
}

export default Button 