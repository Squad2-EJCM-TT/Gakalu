import { Botao, TextoBotao } from "./style";
type Props = {
    texto: string;
    onClick: any;
}

export default function BotaoPreto ({texto, onClick}: Props) {
    return(
        <Botao onPress={onClick}>
            <TextoBotao>{texto}</TextoBotao>
        </Botao>
    )
}