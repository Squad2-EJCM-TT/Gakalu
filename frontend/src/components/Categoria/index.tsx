import { Link } from "react-router-dom";
import { Container, Icon, Rectangle, Title } from "./style";

const iconMap: { [key: number]: any } = {
    1: require("../../assets/icons/jogosEletronicos.png"),
    2: require("../../assets/icons/pecasComputadores.png"),
    3: require("../../assets/icons/acessoriosNovos.png"),
    4: require("../../assets/icons/acessoriosSemiNovos.png"),
};

export default function Categoria({ index, link, title }: {index: number, link?: string, title: string}) {
    const iconSource = iconMap[index];

    return (
        <Container>
            {link ? (
                <Link to={link}>
                    <Rectangle>
                        <Icon source={iconSource} />
                    </Rectangle>
                </Link>
            ) : (
                <Rectangle>
                    <Icon source={iconSource} />
                </Rectangle>
            )}
            <Title>{title}</Title>
        </Container>
    );
}
