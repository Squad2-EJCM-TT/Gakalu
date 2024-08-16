import { Botao, TextoBotao } from "./style";
type Props = {
    texto: string;
}


export default function BotaoAzul ({texto}: Props) {
    return(
        <Botao>
            <TextoBotao>{texto}</TextoBotao>
        </Botao>
    )
}