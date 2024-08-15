import { View } from "react-native"
import { ContainerHeader, ContainerSeta, SetaImg, ContainerTitulo, TextTitulo, TextSubTitulo, ContainerCarrinho, CarrinhoImg } from "./style"


type PropsHeader2 = {
    titulo: string;
    subtitulo: string;
}


const Header2 = (props: PropsHeader2) => {
    return (
        <ContainerHeader>
            <ContainerSeta>
                <SetaImg source={require("../../assets/SetaEsquerda.svg")}/>
            </ContainerSeta>
            <ContainerTitulo>
                <TextTitulo>
                    {props.titulo}
                </TextTitulo>
                <TextSubTitulo>
                        {props.subtitulo}
                    </TextSubTitulo>
            </ContainerTitulo>
            <ContainerCarrinho>
                <CarrinhoImg source={require("../../assets/CarrinhoIcon.svg")}/>
            </ContainerCarrinho>
        </ContainerHeader>
    )
}

export default Header2 